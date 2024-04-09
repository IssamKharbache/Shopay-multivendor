import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      title,
      slug,
      imageUrl,
      description,
      categoryIds,
      isActive,
      content,
    } = await request.json();
    const newBlog = {
      title,
      slug,
      imageUrl,
      description,
      categoryIds,
      isActive,
      content,
    };
    console.log(newBlog);
    return NextResponse.json(newBlog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create a new blog",
        error,
      },
      { status: 500 }
    );
  }
};
