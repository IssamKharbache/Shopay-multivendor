import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, slug, imageUrl, description, marketIds, isActive } =
      await request.json();
    const alreadyExist = await db.category.findUnique({
      where: {
        slug,
      },
    });
    if (alreadyExist) {
      return NextResponse.json(
        {
          data: null,
          message: "Category already exists",
        },
        { status: 409 }
      );
    }
    const newCategory = await db.category.create({
      data: { title, slug, imageUrl, description, marketIds, isActive },
    });
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create a new category",
        error,
      },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get categories. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
