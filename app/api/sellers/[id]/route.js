import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const seller = await db.user.findUnique({
      where: {
        id,
      },

      include: {
        sellerProfile: true,
      },
    });
    return NextResponse.json(seller);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get seller. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Seller not found",
          error,
        },
        { status: 404, statusText: "Seller not found" }
      );
    }
    const deletedSeller = await db.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedSeller);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Seller. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params: { id } }) => {
  try {
    //getting the data
    const { status, emailVerified } = await request.json();
    const isExisting = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Not found",
        },
        { status: 404, statusText: "Not found" }
      );
    }
    const updateSeller = await db.user.update({
      where: {
        id,
      },
      data: {
        status,
        emailVerified,
      },
    });
    return NextResponse.json(updateSeller);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update product. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
