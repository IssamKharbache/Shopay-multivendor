import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return;
  const { user } = session;
  return (
    <div className="text-4xl text-gray-900 dark:text-gray-200">
      <h2>Welcome {user?.name}</h2>
      <p>Working on this page soon</p>
    </div>
  );
};

export default page;
