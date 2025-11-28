import Logo from "@/components/logo";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Airplay, Users, Building } from "lucide-react";
import Link from "next/link";

const Links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Boards", href: "/dashboard/projects", icon: Airplay },
  { name: "Organizations", href: "/dashboard/organizations", icon: Building },
];                  

const MainDashboardSidebar = () => {
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
              className="flex items-center space-x-2 px-4 py-2 text-lg rounded-md hover:bg-accent hover:text-primary"
            >
              <link.icon className="w-8 h-8" />
              <span>{link.name}</span>
            </Link>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>WORKSPACES</SidebarGroupLabel>
      </SidebarGroup>
    </Sidebar>
  );
};

export default MainDashboardSidebar;
