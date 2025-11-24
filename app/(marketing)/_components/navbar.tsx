import Link from "next/link";

import Logo from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
];

const AuthButtons = [
    { name: "Login", href: "/auth/login" },
    { name: "Sign Up", href: "/auth/sign-up" },
]

const Navbar = () => {
  return (
    <nav className=" w-full h-16 z-20 flex flex-col items-center justify-between px-6 ">
      <div className=" mx-auto max-w-7xl w-full  border-b  flex items-center justify-between">
        <Logo showTitle={true} />
        <div className="flex items-center justify-between space-x-6">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="ml-6 text-gray-400 hover:text-gray-600 "
            >
              {link.name}
            </Link>
          ))}
          {AuthButtons.map((button) => (
            <Button asChild key={button.name} >
                <Link href={button.href}>
                    {button.name}
                </Link>
                </Button>
          ))}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
