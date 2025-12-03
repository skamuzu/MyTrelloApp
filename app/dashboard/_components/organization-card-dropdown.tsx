"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, PenLine, Trash2 } from "lucide-react";
import { DeleteOrganizationDialog } from "./delete-organization-dialog";
import EditOrganizationDialog from "./edit-organization-dialog";

type OrganizationCardProps = {
  color: string;
  name: string;
  desc: string;
  id: string;
};

export default function OrganizationCardDropdown({
  id,
  name,
  desc,
  color,
}: OrganizationCardProps) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="w-5 h-5" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setEditOpen(true)}>
            <PenLine />
            Edit Item
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-red-600"
            onSelect={() => setDeleteOpen(true)}
          >
            <Trash2 />
            Delete Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditOrganizationDialog
        id={id}
        color={color}
        desc={desc}
        name={name}
        open={editOpen}
        setOpen={setEditOpen}
      />
      <DeleteOrganizationDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        id={id}
      />
    </>
  );
}
