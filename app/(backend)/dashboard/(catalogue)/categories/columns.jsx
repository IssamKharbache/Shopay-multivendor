"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

//ICONS
import { LuArrowUpDown } from "react-icons/lu";
import { MoreHorizontal } from "lucide-react";

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
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Category Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl");
      return (
        <div className="shrink-0">
          <Image
            width={250}
            height={250}
            alt="cat image"
            src={imageUrl}
            className="w-16 h-16 rounded-md object-cover"
          />
        </div>
      );
    },
  },

  {
    accessorKey: "isActive",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Date created",
    cell: ({ row }) => {
      const createdDate = row.getValue("createdAt");
      const originalDate = new Date(createdDate);
      const day = originalDate.getDate();
      const month = originalDate.toLocaleString("default", {
        month: "2-digit",
      });
      const year = originalDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      return <div>{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const isActive = row.isActive;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-poppins" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(isActive)}
            >
              Copy Status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Category</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
