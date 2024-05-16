import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { sendEmail } from "@/lib/nodemailer";

//REGISTRING A NEW USER
export const POST = async (request) => {
  try {
    const { name, email, password, role } = await request.json();

    //check if the user already exists
    const alreadyExists = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (alreadyExists) {
      return NextResponse.json(
        { data: null, message: "User already exists" },
        { status: 409 }
      );
    }
    const rawToken = uuidv4();
    // Encode the token using Base64 URL-safe format
    const token = base64url.encode(rawToken);
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //Creating the new user
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        verificationToken: token,
      },
    });
    const userId = newUser.id;
    //send the email if user role is farmer
    if (role === "FARMER") {
      sendEmail({
        redirectUrl: `onboarding/${userId}/?token=${token}`,
        email,
        name,
        linkText: "Verify your account",
        description:
          "Thanks for creating an account with us please click in the button below to verify your account",
        previewText: "Account verification to become a farmer in shopay",
        subject: "Email Verification - Shopay",
        buttonTitle: "Verify your account",
      });
    }
    return NextResponse.json(
      { data: newUser, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Internal server error" },
      { status: 500 }
    );
  }
};

//GETTING USERS
export const GET = async (request) => {
  const rawToken = uuidv4();

  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get users.",
        error,
      },
      { status: 500 }
    );
  }
};
