"use client";

import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/dataDableComponents/dataTableColumns/DateColumn";
import ImageColumn from "@/components/dataDableComponents/dataTableColumns/ImageColumn";
import TitleColumn from "@/components/dataDableComponents/dataTableColumns/TitleColumn";
import ActionsColumn from "@/components/dataDableComponents/dataTableColumns/ActionsColumn";
import MarketCategories from "@/components/dataDableComponents/dataTableColumns/marketCategories";

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
  },
  {
    accessorKey: "logoUrl",
    header: "Logo Image",
    cell: ({ row }) => <ImageColumn row={row} accessoryKey="logoUrl" />,
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
      const market = row.original;
      return (
        <ActionsColumn
          title="Market"
          row={row}
          endpoint={`markets/${market.id}`}
          editEndpoint={`markets/update/${market.id}`}
        />
      );
    },
  },
];
