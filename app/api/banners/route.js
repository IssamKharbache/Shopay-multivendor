import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, imageUrl, link } = await request.json();
    const newBanner = { title, imageUrl, link };
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create a new Banner",
        error,
      },
      { status: 500 }
    );
  }
};
