import Logo from "@/components/logo";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Airplay, Users, Building } from "lucide-react";
import Link from "next/link";
import { getUserOrganizations } from "@/lib/actions/organizations";
import { createClient } from "@/lib/supabase/server";

const Links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Boards", href: "/dashboard/projects", icon: Airplay },
  { name: "Organizations", href: "/dashboard/organizations", icon: Building },
];

const MainDashboardSidebar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const organizations = user ? await getUserOrganizations(user.id) : [];
  return (
    <Sidebar className="bg-background">
      <SidebarHeader className="flex items-start p-0">
        <Logo showTitle={true} />
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupContent>
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-md hover:bg-muted "
            >
              <link.icon className="w-8 h-8" />
              <span>{link.name}</span>
            </Link>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>WORKSPACES</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>

          {organizations.map((organization) => {
            return (
              <SidebarMenuItem key={organization.id}   className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-muted ">
                <div className="w-6 h-6 rounded-xl" style={{ backgroundColor: `${organization.color}` }}></div>
                <Link href={``}>{organization.name}</Link>
              </SidebarMenuItem>
            );
          })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  );
};

export default MainDashboardSidebar;
