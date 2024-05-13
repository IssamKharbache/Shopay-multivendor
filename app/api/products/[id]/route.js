import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get single product. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params: { id } }) => {
  try {
    const isExisting = await db.product.findUnique({
      where: {
        id,
      },
    });
    if (!isExisting) {
      return NextResponse.json(
        {
          data: null,
          message: "Product not found",
          error,
        },
        { status: 404, statusText: "Product not found" }
      );
    }
    const deletedProduct = await db.product.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete product. Please try again.",
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
    const isExisting = await db.product.findUnique({
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
    const updateProduct = await db.product.update({
      where: {
        id,
      },
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
    return NextResponse.json(updateProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update product. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
};
