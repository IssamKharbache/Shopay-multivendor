import Link from "next/link";
import React from "react";
import { MdModeEdit } from "react-icons/md";

const EditButton = ({ title, editEndpoint }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <Link href={`${baseUrl}/dashboard/${editEndpoint}`}>
      <span className="flex items-center gap-2">
        <MdModeEdit /> Edit {title}
      </span>
    </Link>
  );
};

export default EditButton;
