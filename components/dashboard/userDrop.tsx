import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import SignOut from "../sign-out";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface UserDropProps {
    user: {
        name: string;
        image: string;
        email: string;
        githubUrl: string;
      };
    }

export default ({user}:UserDropProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="relative">
                <img
                  src={user.image!}
                  alt="GitHub profile"
                  className="w-10 h-10 border-gray-100/30 border rounded-full"
                />
                <ChevronDown className="w-4 h-4 absolute bottom-0 right-0 rounded-full bg-neutral-800 border border-gray-100/20" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-56 shadow-lg shadow-amber-50/5">
              <DropdownMenuLabel>
                <div className="flex items-center gap-2 py-2">
                  <Image
                    width="40"
                    height="40"
                    src={user.image!}
                    alt="GitHub profile"
                    className="w-10 h-10 border-gray-100/30 border rounded-full"
                  />
                  <p>{user.name}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    );
}