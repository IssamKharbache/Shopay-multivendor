import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, imageUrl, link, isActive } = await request.json();
    const newBanner = await db.banner.create({
      data: {
        title,
        imageUrl,
        link,
        isActive,
      },
    });
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

export const GET = async (request) => {
  try {
    const banner = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(banner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get banners. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
