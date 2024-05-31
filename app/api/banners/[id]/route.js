import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const banner = await db.banner.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(banner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single banner. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.banner.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Banner not found",
          error,
        },
        { status: 404, statusText: "Banner not found" }
      );
    }
    const deletedBanner = await db.banner.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Banner. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params: { id } }) => {
  try {
    //getting the data
    const { title, imageUrl, link, isActive } = await request.json();
    const isExisting = await db.banner.findUnique({
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
    const updateBanner = await db.banner.update({
      where: {
        id,
      },
      data: { title, imageUrl, link, isActive },
    });
    return NextResponse.json(updateBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update banner. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
