"use client";

import { useCurrentUserId } from "@/hooks/use-current-user-id";
import { Input } from "./ui/input";
import { useState } from "react";

export default function CurrentUserInput() {
  const id = useCurrentUserId();

  if (!id) return null;

  return <Input type="hidden" name="user_id" value={id} />;
}
