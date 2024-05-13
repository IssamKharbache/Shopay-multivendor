import React from "react";

const DateColumn = ({ row, accessorKey }) => {
  const createdDate = row.getValue(accessorKey);
  const originalDate = new Date(createdDate);
  const day = originalDate.getDate();
  const month = originalDate.toLocaleString("default", {
    month: "numeric",
  });
  const year = originalDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg">{formattedDate}</p>
      <p className="text-xs text-gray-400 ">(Day/Month/Year)</p>
    </div>
  );
};

export default DateColumn;
