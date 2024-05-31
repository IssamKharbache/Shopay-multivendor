import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, slug, logoUrl, description, isActive, categoryIds } =
      await request.json();
    const alreadyExist = await db.market.findUnique({
      where: {
        slug,
      },
    });
    if (alreadyExist) {
      return NextResponse.json(
        {
          data: null,
          message: "Market already exists",
        },
        { status: 409, statusText: "Market already exists" }
      );
    }
    const newMarket = await db.market.create({
      data: { title, slug, logoUrl, description, isActive, categoryIds },
    });
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

export const GET = async (request) => {
  try {
    const markets = await db.market.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(markets);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get markets. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
