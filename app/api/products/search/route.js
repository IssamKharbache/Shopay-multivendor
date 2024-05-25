import db from "@/lib/db";

import { NextResponse } from "next/server";

export const GET = async (request) => {
  const sortBy = request.nextUrl.searchParams.get("sort");
  const min = request.nextUrl.searchParams.get("min");
  const max = request.nextUrl.searchParams.get("max");
  //page params
  const page = request.nextUrl.searchParams.get("page") || 1;
  const pageSize = 3;
  //search params
  const searchQuery = request.nextUrl.searchParams.get("search");

  //sorting by price
  let where = {
    OR: [
      {
        title: { contains: searchQuery, mode: "insensitive" },
      },
    ],
    OR: [
      {
        description: { contains: searchQuery, mode: "insensitive" },
      },
    ],
    OR: [
      {
        description: { contains: searchQuery, mode: "insensitive" },
      },
    ],
  };
  //sorting by min and max
  if (min && max) {
    where.salePrice = {
      gte: parseFloat(min),
      lte: parseFloat(max),
    };
  } else if (min) {
    where.salePrice = {
      gte: parseFloat(min),
    };
  } else if (max) {
    where.salePrice = {
      lte: parseFloat(max),
    };
  }

  let products;
  try {
    if (sortBy) {
      products = await db.product.findMany({
        where,
        orderBy: {
          salePrice: sortBy,
        },
        skip: (parseInt(page) - 1) * parseInt(pageSize),
        take: parseInt(pageSize),
      });
    } else {
      products = await db.product.findMany({
        orderBy: {
          createdAt: "asc",
        },
        skip: (parseInt(page) - 1) * parseInt(pageSize),
        take: parseInt(pageSize),
      });
    }
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get products.",
        error,
      },
      { status: 500 }
    );
  }
};
