import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { slug } }) => {
  try {
    const product = await db.product.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single product. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
