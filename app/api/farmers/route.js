import db from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const farmerData = await request.json();
    //check if the user already exists
    const alreadyExists = await db.user.findUnique({
      where: {
        id: farmerData.userId,
      },
    });
    if (!alreadyExists) {
      NextResponse.json(
        { data: null, Message: "No user found " },
        { status: 404 }
      );
    }
    //update the user verification
    const updatedUser = await db.user.update({
      where: {
        id: farmerData.userId,
      },
      data: {
        emailVerified: true,
      },
    });

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
    const farmerProfile = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "FARMER",
      },
      include: {
        farmerProfile: true,
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
