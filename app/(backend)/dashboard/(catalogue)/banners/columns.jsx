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
  },
  {
    accessorKey: "imageUrl",
    header: "Banner Image",
    cell: ({ row }) => <ImageColumn row={row} />,
  },

  {
    accessorKey: "isActive",
    header: "Status",
  },
  {
    accessorKey: "link",
    header: "Banner Link",
  },
  {
    accessorKey: "createdAt",
    header: "Date created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const banner = row.original;
      return (
        <ActionsColumn
          title="Banner"
          row={row}
          endpoint={`banners/${banner.id}`}
          editEndpoint={`banners/update/${banner.id}`}
        />
      );
    },
  },
];
