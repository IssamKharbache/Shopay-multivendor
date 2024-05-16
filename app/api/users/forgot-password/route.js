import { NextResponse } from "next/server";

import db from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";

import { sendEmail } from "@/lib/nodemailer";
export async function PUT(request) {
  try {
    //extract the data
    const { email } = await request.json();
    //Check if the user Already exists in the db
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: `User Not Found`,
        },
        {
          status: 404,
          statusText: "User not found ,Please try with another email ",
        }
      );
    }
    //Generate Token
    // Generate a random UUID (version 4)
    const rawToken = uuidv4();

    // Encode the token using Base64 URL-safe format
    const token = base64url.encode(rawToken);

    //Send an Email to reset password with the Token on the link as a search param
    const linkText = "Reset Password";
    const userId = existingUser.id;
    const name = existingUser.name;
    const previewText = "Reset your password by one click";
    const redirectUrl = `reset-password?token=${token}&id=${userId}`;
    const description =
      "Click on the following link in order to reset your password. Thank you";
    const subject = "Password Reset - Shopay";
    sendEmail({
      redirectUrl,
      email,
      name,
      linkText,
      description,
      previewText,
      subject,
      buttonTitle: "Reset your password",
    });
    //Upon Click redirect them to the login

    return NextResponse.json(
      {
        data: null,
        message: "User Updated Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      { status: 500 }
    );
  }
}
