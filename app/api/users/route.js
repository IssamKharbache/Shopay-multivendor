import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

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
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //Creating the new user
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

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
