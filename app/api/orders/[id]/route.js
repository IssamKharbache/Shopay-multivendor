import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const order = await db.order.findUnique({
      where: {
        id,
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single order. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.order.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Order not found",
          error,
        },
        { status: 404, statusText: "Order not found" }
      );
    }
    const deletedOrder = await db.order.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete order. Please try again.",
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
