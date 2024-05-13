import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const coupon = await db.coupon.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(coupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get coupon. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.coupon.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Coupon not found",
          error,
        },
        { status: 404, statusText: "Coupon not found" }
      );
    }
    const deletedCoupon = await db.coupon.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Coupon. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params: { id } }) => {
  try {
    //getting the data
    const { title, couponCode, expiryDate, isActive } = await request.json();
    const isExisting = await db.coupon.findUnique({
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
    const updateCoupon = await db.coupon.update({
      where: {
        id,
      },
      data: { title, couponCode, expiryDate, isActive },
    });
    return NextResponse.json(updateCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update coupon. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
