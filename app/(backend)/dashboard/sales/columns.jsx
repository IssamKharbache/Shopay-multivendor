"use client";

import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/dataDableComponents/dataTableColumns/DateColumn";
import ImageColumn from "@/components/dataDableComponents/dataTableColumns/ImageColumn";
import TitleColumn from "@/components/dataDableComponents/dataTableColumns/TitleColumn";
import ActionsColumn from "@/components/dataDableComponents/dataTableColumns/ActionsColumn";

export const columns = [
  //columns
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "productImage",
    header: "Product Image",
    cell: ({ row }) => <ImageColumn row={row} accessoryKey="productImage" />,
  },
  {
    accessorKey: "productTitle",
    header: ({ column }) => {
      return <TitleColumn column={column} />;
    },
    cell: ({ row }) => {
      const title = row.getValue("productTitle");
      return <div className="line-clamp-1 w-72">{title}</div>;
    },
  },

  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const total = row.getValue("total");
      return <div className="">${total}</div>;
    },
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
  },

  {
    accessorKey: "createdAt",
    header: "Date Sold",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
];
