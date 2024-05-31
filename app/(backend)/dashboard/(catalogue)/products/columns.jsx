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
    accessorKey: "title",
    header: ({ column }) => {
      return <TitleColumn column={column} />;
    },
    cell: ({ row }) => {
      const title = row.getValue("title");
      return <div className="line-clamp-1 w-72">{title}</div>;
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Product Image",
    cell: ({ row }) => <ImageColumn row={row} />,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const descr = row.getValue("description");
      return <div className="line-clamp-1 w-96">{descr}</div>;
    },
  },
  {
    accessorKey: "isActive",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Date created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <ActionsColumn
          title="Product"
          row={row}
          endpoint={`products/${product.id}`}
          editEndpoint={`products/update/${product.id}`}
        />
      );
    },
  },
];
