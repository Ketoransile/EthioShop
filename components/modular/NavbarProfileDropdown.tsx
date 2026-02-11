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
        <button className="p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-primary cursor-pointer">
          <LuUser size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        sideOffset={8}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href="/my-orders"
              className="flex items-center gap-4 cursor-pointer"
            >
              <LuShoppingBag size={20} />
              <p>My Orders</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/" className="flex items-center gap-4 cursor-pointer">
              <IoHomeOutline size={20} />
              <p>Home</p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Button
            onClick={handleLogout}
            className="-mx-1 flex items-start justify-start gap-4 cursor-pointer bg-transparent text-foreground hover:text-foreground border-none w-full"
          >
            <TbLogout2 size={20} />
            <p>Logout</p>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
