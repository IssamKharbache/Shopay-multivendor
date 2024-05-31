import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      title,
      slug,
      imageUrl,
      description,
      categoryId,
      isActive,
      content,
    } = await request.json();
    const alreadyExist = await db.blogs.findUnique({
      where: {
        slug,
      },
    });
    if (alreadyExist) {
      return NextResponse.json(
        {
          data: null,
          message: "Blog with this title already exists",
        },
        { status: 409, statusText: "Blog with this title already exists" }
      );
    }
    const newBlog = await db.blogs.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        categoryId,
        isActive,
        content,
      },
    });

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

export const GET = async (request) => {
  try {
    const blogs = await db.blogs.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Blogs. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
