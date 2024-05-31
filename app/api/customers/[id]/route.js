import db from "@/lib/db";
import { NextResponse } from "next/server";

export const PUT = async (request, { params: { id } }) => {
  try {
    //getting the data
    const {
      name,
      firstName,
      lastName,
      email,
      username,
      phone,
      streetAddress,
      city,
      country,
      district,
      dateOfBirth,
      profileImage,
    } = await request.json();
    const isExisting = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Not found",
          error,
        },
        { status: 404, statusText: "Not found" }
      );
    }
    const updateUser = await db.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });

    const updateUserProfile = await db.userProfile.update({
      where: {
        userId: id,
      },
      data: {
        name,
        firstName,
        lastName,
        email,
        username,
        phone,
        streetAddress,
        city,
        country,
        district,
        dateOfBirth,
        profileImage,
      },
    });
    return NextResponse.json(updateUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update user profile. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
