import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, PenLine, Trash2 } from "lucide-react";
import { deleteOrganization } from "@/lib/actions/organizations";
import { createClient } from "@/lib/supabase/server";
import { Organization } from "@/lib/types/organizations";

export default async function OrganizationCardDropdown({ id }: { id: string }) {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical
          className="w-5 h-5 text-background outline-0 opacity-0 group-hover:opacity-100 transition-opacity
"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <PenLine />
          Edit Item
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-600"
          onClick={() => deleteOrganization(id, user.id)}
        >
          <Trash2 />
          Delete Item
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
