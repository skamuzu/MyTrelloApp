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
import { createOrganization } from "@/lib/actions/organizations";

export default function CreateOrganizationDialog({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={createOrganization}>
          <DialogHeader className="mb-2">
            <DialogTitle>Create Organization</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Organization Name</Label>
              <Input id="name" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="desc">Organization Description (Optional)</Label>
              <Input id="desc" name="desc" />
            </div>
            <div className="grid gap-3">
              <ColorPicker />
              <CurrentUserInput/>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button variant="outline">Cancel</Button>

            <Button type="submit">Create Organization</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
