import db from "@/lib/db";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },

      include: {
        products: true,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single category. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.category.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Category not found",
          error,
        },
        { status: 404, statusText: "Category not found" }
      );
    }
    const deletedCategory = await db.category.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete categorie. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params: { id } }) => {
  try {
    //getting the data
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const isExisting = await db.category.findUnique({
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
    const updateCategory = await db.category.update({
      where: {
        id,
      },
      data: { title, slug, imageUrl, description, isActive },
    });
    return NextResponse.json(updateCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update categorie. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
