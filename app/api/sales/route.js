import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const sales = await db.sale.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(sales);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get sales.",
        error,
      },
      { status: 500 }
    );
  }
};
