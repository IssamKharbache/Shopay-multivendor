import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      barcode,
      categoryId,
      description,
      farmerId,
      imageUrl,
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
        { status: 409 }
      );
    }
    const newProduct = await db.product.create({
      data: {
        barcode,
        categoryId,
        description,
        userId: farmerId,
        imageUrl,
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

    console.log(newProduct);
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
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
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
