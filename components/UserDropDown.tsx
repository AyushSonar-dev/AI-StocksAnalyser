"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./navitems";

const UserDropDown = () => {
  const router = useRouter();
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear auth tokens, update state)
    // After logout, redirect to the login page
    router.push("/login");
  };
  const user = { name: "ayush", email: "ayush@gmail.com" };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-4 hover:text-yellow-500"
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start ">
            <span className="text-gray-400 text-base font-medium">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="felx felx-col ">
              <span className="text-gray-400 text-base font-medium">
                {user.name}
              </span>
              <span className="text-gray-500 text-sm ">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-400" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-gray-100 text-md font-medium focus:bg-transparent focuse:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block " />
          LogOut
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
        <nav className="sm:hidden">
            <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
