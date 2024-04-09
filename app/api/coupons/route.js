import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, couponCode, expiryDate } = await request.json();
    const newCoupon = { title, couponCode, expiryDate };
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed creating new coupon try again ",
        error,
      },
      { status: 500 }
    );
  }
};
