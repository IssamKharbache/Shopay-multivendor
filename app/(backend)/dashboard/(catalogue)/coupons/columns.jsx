"use client";

import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/dataDableComponents/dataTableColumns/DateColumn";
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
    accessorKey: "couponCode",
    header: "Coupon Code",
  },
  {
    accessorKey: "expiryDate",
    header: "Date of expiration",
    cell: ({ row }) => <DateColumn row={row} accessorKey="expiryDate" />,
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
      const coupon = row.original;
      return (
        <ActionsColumn
          title="Coupon"
          row={row}
          endpoint={`coupons/${coupon.id}`}
          editEndpoint={`coupons/update/${coupon.id}`}
        />
      );
    },
  },
];
