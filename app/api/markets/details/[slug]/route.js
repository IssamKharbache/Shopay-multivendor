import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { slug } }) => {
  try {
    const market = await db.market.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(market);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single market. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
