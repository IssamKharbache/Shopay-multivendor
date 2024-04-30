import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
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
        message: "Failed to get single categories. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
