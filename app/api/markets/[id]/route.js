import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const market = await db.market.findUnique({
      where: {
        id,
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

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.market.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Market not found",
          error,
        },
        { status: 404, statusText: "Market not found" }
      );
    }
    const deletedMarket = await db.market.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete market. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params: { id } }) => {
  try {
    //getting the data
    const { title, slug, logoUrl, description, isActive, categoryIds } =
      await request.json();
    const isExisting = await db.market.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Not found",
          error,
        },
        { status: 404, statusText: "Not found" }
      );
    }
    const updateMarket = await db.market.update({
      where: {
        id,
      },
      data: { title, slug, logoUrl, description, isActive, categoryIds },
    });
    return NextResponse.json(updateMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update market. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
