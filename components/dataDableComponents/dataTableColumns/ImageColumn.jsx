import Image from "next/image";
import React from "react";

const ImageColumn = ({ row, accessoryKey }) => {
  const imageUrl = row.getValue(`${!accessoryKey ? "imageUrl" : accessoryKey}`);
  return (
    <div className="shrink-0">
      <Image
        width={250}
        height={250}
        alt={`${accessoryKey}`}
        src={imageUrl}
        className="w-16 h-16 rounded-md object-cover"
      />
    </div>
  );
};

export default ImageColumn;
