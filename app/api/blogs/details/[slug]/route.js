import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { slug } }) => {
  try {
    const blogs = await db.blogs.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single blog. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
