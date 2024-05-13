import { Button } from "@/components/ui/button";
import React from "react";
import { LuArrowUpDown } from "react-icons/lu";

const TitleColumn = ({ column, header }) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {header ? header : "Title"}
      <LuArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default TitleColumn;
