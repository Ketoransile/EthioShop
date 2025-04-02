import { Button } from "@/components/ui/button";
import { LuShoppingBag } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";

export function NavbarProfileDropdown() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-brandBg hover:bg-blue-400 cursor-pointer border-r-0 border-l-0 border-t-0 border-b-0 rounded-full "
        >
          {" "}
          <FiUser size={24} className="text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 mt-4 ml-20"
        // collisionPadding={16}
        // avoidCollisions={true}
      >
        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href="/profile"
              className="flex items-center gap-4 cursor-pointer"
            >
              <FiUser size={24} />
              <p>Manage My Account</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/my-orders"
              className="flex items-center gap-4 cursor-pointer"
            >
              <LuShoppingBag size={24} />
              <p>My Order</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/" className="flex items-center gap-4 cursor-pointer">
              <IoHomeOutline size={24} />
              <p>Home</p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="#" className="flex items-center gap-4 cursor-pointer">
            <TbLogout2 size={24} />
            <p>Logout</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
