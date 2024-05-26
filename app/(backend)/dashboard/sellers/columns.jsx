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
    accessorKey: "name",
    header: ({ column }) => {
      return <TitleColumn column={column} header="Name" />;
    },
  },
  // {
  //   accessorKey: "profileimageUrl",
  //   header: "Farmer Image",
  //   cell: ({ row }) => <ImageColumn row={row} accessoryKey="profileimageUrl" />,
  // },

  {
    accessorKey: "email",
    header: "Email adress",
  },
  {
    accessorKey: "role",
    header: "Role",
  },

  {
    accessorKey: "createdAt",
    header: "Date created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const seller = row.original;
      return (
        <ActionsColumn
          title="Seller"
          row={row}
          endpoint={`sellers/${seller.id}`}
          editEndpoint={`sellers/update/${seller.id}`}
        />
      );
    },
  },
];
