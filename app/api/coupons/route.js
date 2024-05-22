import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, couponCode, expiryDate, isActive, vendorId } =
      await request.json();

    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
        vendorId,
      },
    });
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed creating new coupon. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    const coupons = await db.coupon.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(coupons);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get coupons. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
