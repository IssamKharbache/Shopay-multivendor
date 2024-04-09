import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const productData = await request.json();

    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create a new product",
        error,
      },
      { status: 500 }
    );
  }
};
