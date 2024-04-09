import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      adress,
      contactperson,
      contactphone,
      email,
      fullname,
      notes,
      phone,
      terms,
      farmerCode,
    } = await request.json();
    const newFarmer = {
      adress,
      contactperson,
      contactphone,
      email,
      fullname,
      notes,
      phone,
      terms,
      farmerCode,
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed creating new farmer try again ",
      },
      { status: 500 }
    );
  }
};
