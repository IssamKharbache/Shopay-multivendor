import db from "@/lib/db";

import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      barcode,
      categoryId,
      description,
      farmerId,
      productImages,
      isActive,
      isWholeSale,
      productCode,
      productPrice,
      salePrice,
      sku,
      slug,
      tags,
      title,
      unit,
      wholeSalePrice,
      wholesaleQty,
      qty,
      productStock,
    } = await request.json();
    //CHECK IF THE PRODUCT ALREADY EXISTS
    const alreadyExist = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (alreadyExist) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exists",
        },
        { status: 409, statusText: "Product already exists" }
      );
    }
    const newProduct = await db.product.create({
      data: {
        barcode,
        categoryId,
        description,
        userId: farmerId,
        productImages,
        imageUrl: productImages[0],
        isActive,
        isWholeSale,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        sku,
        slug,
        tags,
        title,
        unit,
        wholeSalePrice: parseFloat(wholeSalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        qty: parseInt(qty),
        productStock: parseInt(productStock),
      },
    });

    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create a new product",
        error,
      },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  const categoryId = request.nextUrl.searchParams.get("catId");
  //price params
  const sortBy = request.nextUrl.searchParams.get("sort");
  const min = request.nextUrl.searchParams.get("min");
  const max = request.nextUrl.searchParams.get("max");
  //page params
  const page = request.nextUrl.searchParams.get("page") || 1;
  const pageSize = 3;

  //sorting by price
  let where = {
    categoryId,
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
    //paginatin
    if (sortBy) {
      products = await db.product.findMany({
        where,
        orderBy: {
          salePrice: sortBy,
        },
        skip: (parseInt(page) - 1) * parseInt(pageSize),
        take: parseInt(pageSize),
      });
      //sort desc or asc
    } else if (categoryId) {
      products = await db.product.findMany({
        where,
        orderBy: {
          createdAt: "asc",
        },
        skip: (parseInt(page) - 1) * parseInt(pageSize),
        take: parseInt(pageSize),
      });
    } else {
      products = await db.product.findMany({
        orderBy: {
          createdAt: "asc",
        },
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
