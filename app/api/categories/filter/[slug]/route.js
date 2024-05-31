import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { slug } }) => {
  try {
    const category = await db.category.findUnique({
      where: {
        slug,
      },

      include: {
        products: true,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single category. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
