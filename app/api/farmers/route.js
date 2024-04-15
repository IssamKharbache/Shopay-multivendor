import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const farmerData = await request.json();
    const newFarmer = farmerData;
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
