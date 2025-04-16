"use client";
import { Button } from "@/components/ui/button";
import { LuShoppingBag } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  // DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
// import { FiUser } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export function NavbarProfileDropdown() {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logout successful");
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        {/* <button className="bg-brandBg hover:bg-blue-400 cursor-pointer p-2 border-r-0 border-l-0 border-t-0 border-b-0 rounded-full ">
          {" "}
          <FiUser size={24} className="text-white" />
        </button> */}
        <LuUser size={28} className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 mt-4 ml-20"
        // collisionPadding={16}
        // avoidCollisions={true}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem asChild>
            <Link
              href="/profile"
              className="flex items-center gap-4 cursor-pointer"
            >
              <FiUser size={24} />
              <p>My Profile</p>
            </Link>
          </DropdownMenuItem> */}
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
          <Button
            onClick={handleLogout}
            className="-mx-1 flex items-start justify-start gap-4 cursor-pointer bg-transparent text-black border-none w-full "
          >
            <TbLogout2 size={24} />
            <p>Logout</p>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
