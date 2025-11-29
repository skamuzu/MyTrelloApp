import { InputGroup,InputGroupInput, InputGroupAddon } from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { CurrentUserAvatar } from "@/components/current-user-avatar";

const MainDashboardNavbar = () => {
  return (
    <nav className="flex w-full h-16 items-center justify-between px-6 border-b z-20 bg-sidebar">
        <InputGroup className="w-1/3">
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