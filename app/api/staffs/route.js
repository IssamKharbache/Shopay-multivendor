import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      fullname,
      password,
      email,
      phone,
      adress,
      nin,
      dob,
      notes,
      isActive,
      code,
    } = await request.json();

    const newStaff = {
      fullname,
      password,
      email,
      phone,
      adress,
      nin,
      dob,
      notes,
      isActive,
      code,
    };
    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create a new staff member",
        error,
      },
      { status: 500 }
    );
  }
};
