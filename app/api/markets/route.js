import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { name, slug, logoUrl, description, isActive } = await request.json();
    const newMarket = { name, slug, logoUrl, description, isActive };
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create a new market",
        error,
      },
      { status: 500 }
    );
  }
};
