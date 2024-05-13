import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const farmer = await db.user.findUnique({
      where: {
        id,
      },

      include: {
        farmerProfile: true,
      },
    });
    return NextResponse.json(farmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Farmer. Please try again.",
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
          message: "Farmer not found",
          error,
        },
        { status: 404, statusText: "Farmer not found" }
      );
    }
    const deletedFarmer = await db.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Farmer. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
