import db from "@/lib/db";
import generateOrderNumber from "@/lib/generateOrderNumber";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { orderItems, checkoutFormData } = await request.json();
    const {
      city,
      district,
      email,
      firstName,
      lastName,
      country,
      paymentMethod,
      phone,
      shippingCost,
      streetAddress,
      userId,
    } = checkoutFormData;

    const newOrder = await db.order.create({
      data: {
        userId,
        firstName,
        lastName,
        email,
        phone,
        streetAddress,
        city,
        country,
        district,
        shippingCost: parseFloat(shippingCost),
        paymentMethod,
      },
    });

    // Step 2: Create OrderItems and associate with the Order
    const createdOrderItems = await prisma.orderItem.createMany({
      data: orderItems.map((item) => ({
        orderId: newOrder.id,
        productId: item.id,
        quantity: parseInt(item.qty),
        price: parseFloat(item.salePrice),
        imageUrl: item.imageUrl,
        title: item.title,
        //create order number
        orderNumber: generateOrderNumber(8),
      })),
    });

    return NextResponse.json(newOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed trying to create the order",
        error,
      },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Orders.",
        error,
      },
      { status: 500 }
    );
  }
};
