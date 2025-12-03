import { InputGroup,InputGroupInput, InputGroupAddon } from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { CurrentUserAvatar } from "@/components/current-user-avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const MainDashboardNavbar = () => {
  return (
    <nav className="flex w-full h-16 items-center justify-between px-6 border-b z-20 bg-sidebar">
      <SidebarTrigger variant="outline" className="md:hidden "/>
        <InputGroup className="w-1/3 opacity-0">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
        <CurrentUserAvatar/>
    </nav>
  )
}

export default MainDashboardNavbar;