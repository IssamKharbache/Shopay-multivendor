import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, slug, imageUrl, description, marketIds } =
      await request.json();
    const newCategory = { title, slug, imageUrl, description, marketIds };
    console.log(newCategory);
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
