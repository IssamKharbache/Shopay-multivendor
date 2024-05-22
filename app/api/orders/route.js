import db from "@/lib/db";
import generateOrderNumber from "@/lib/generateOrderNumber";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
    const {
      city,
      country,
      district,
      email,
      firstName,
      lastName,
      paymentMethod,
      phone,
      shippingCost,
      streetAddress,
      userId,
    } = checkoutFormData;

    // Use Prisma transaction to ensure both queries are successful or rolled back
    const result = await db.$transaction(async (prisma) => {
      //create new order
      const newOrder = await prisma.order.create({
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
          orderNumber: generateOrderNumber(8),
        },
      });
      //create the order items
      const newOrderItems = await prisma.orderItem.createMany({
        data: orderItems.map((item) => ({
          orderId: newOrder.id,
          vendorId: item.vendorId,
          productId: item.id,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          imageUrl: item.imageUrl,
          title: item.title,
        })),
      });
      //create sales
      const sales = await Promise.all(
        orderItems.map(async (item) => {
          const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty);

          const newSale = await prisma.sale.create({
            data: {
              orderId: newOrder.id,
              productTitle: item.title,
              productImage: item.imageUrl,
              productPrice: parseFloat(item.salePrice),
              quantity: parseInt(item.qty),
              productId: item.id,
              vendorId: item.vendorId,
              total: totalAmount,
            },
          });
          return newSale;
        })
      );
      return { newOrder, newOrderItems, sales };
    });

    console.log(result.newOrder, result.newOrderItems, result.sales);
    // Return the response
    return NextResponse.json(result.newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create Order",
        error,
      },
      { status: 500 }
    );
  }
}

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
