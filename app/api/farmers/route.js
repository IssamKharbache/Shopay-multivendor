import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const farmerData = await request.json();
    const newFarmer = await db.farmerProfile.create({
      data: {
        farmerCode: farmerData.farmerCode,
        adress: farmerData.adress,
        contactPerson: farmerData.contactPerson,
        contactPhone: farmerData.contactPhone,
        email: farmerData.email,
        profileimageUrl: farmerData.profileImageUrl,
        name: farmerData.name,
        notes: farmerData.notes,
        phone: farmerData.phone,
        terms: farmerData.terms,
        isActive: farmerData.isActive,
        landSize: parseFloat(farmerData.landSize),
        products: farmerData.products,
        mainCrop: farmerData.mainCrop,
        userId: farmerData.userId,
      },
    });
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed creating new farmer try again ",
      },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    const farmerProfile = await db.farmerProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(farmerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get farmers.",
        error,
      },
      { status: 500 }
    );
  }
};
