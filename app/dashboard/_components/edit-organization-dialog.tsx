"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ColorPicker from "./color-picker";
import CurrentUserInput from "@/components/current-user-input";
import { updateOrganization } from "@/lib/actions/organizations";
import { SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Organization } from "@/lib/types/organizations";
import { OrganizationCardProps } from "@/lib/types/organizations";

type EditOrganizationDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
} & OrganizationCardProps;

export default function EditOrganizationDialog({
  id,
  color,
  name,
  desc,
  open,
  setOpen,
}: EditOrganizationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (formData) => {
            await updateOrganization(formData);
            setOpen(false);
            toast.success("Your organization has been edited");
          }}
        >
          <DialogHeader className="mb-2">
            <DialogTitle>Edit Organization</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Organization Name</Label>
              <Input id="name" name="name" defaultValue={name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="desc">Organization Description (Optional)</Label>
              <Input id="desc" name="desc" defaultValue={desc} />
            </div>
            <div className="grid gap-3">
              <ColorPicker color={color} />
              <Input type="hidden" value={id} name="id"/>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Edit Organization</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
