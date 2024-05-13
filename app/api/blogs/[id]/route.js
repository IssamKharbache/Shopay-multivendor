import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const blogs = await db.blogs.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single blog. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.blogs.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "blog not found",
          error,
        },
        { status: 404, statusText: "blogs not found" }
      );
    }
    const deletedBlog = await db.blogs.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedBlog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Blog. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params: { id } }) => {
  try {
    //getting the data
    const {
      title,
      slug,
      imageUrl,
      description,
      categoryId,
      isActive,
      content,
    } = await request.json();
    const isExisting = await db.blogs.findUnique({
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
    const updateBlog = await db.blogs.update({
      where: {
        id,
      },
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
    return NextResponse.json(updateBlog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update blog. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
