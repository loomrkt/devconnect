"use client"
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Search } from "lucide-react";
import SignOut from "../sign-out";
import { Input } from "../ui/input";
import Image from "next/image";

interface NavbarClientProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  user: any;
}

const NavbarClient = ({
  logo = {
    url: "/",
    src: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594483/vector-logo-illustration-hexagon-gradient-colorful-style_116762-6152_1-removebg-preview_idzfyl.ico",
    alt: "logo",
    title: "DevConnect",
  },
    user,
}: NavbarClientProps) => {
  return (
    <section className="py-4 max-w-[1200px] px-4  mx-auto">
      <div className="container mx-auto">
        <nav className=" justify-between flex gap-4 items-center">
          <div className="flex items-center gap-6 ">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <CldImage
                width="40"
                height="40"
                src={logo.src}
                sizes="100vw"
                alt={logo.alt}
              />
              <span className="hidden md:block text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </Link>
          </div>
          <div className="flex max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5">
            <Search className="h-4 w-4 mr-2.5" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full border-0 focus:bg-transparent"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
            <img
            src={user.image!}
            alt="GitHub profile"
            className="w-10 h-10 border-gray-100/30 border rounded-full"
          />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-56">
              <DropdownMenuLabel><div className="flex items-center gap-2">
                <Image
                        width="40"
                        height="40"
                        src={user.image!}
                        alt="GitHub profile"
                        className="w-10 h-10 border-gray-100/30 border rounded-full"
                    />
                <p>{user.name}</p>
                </div></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" >
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </section>
  );
};

export { NavbarClient };