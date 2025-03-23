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
import { User } from "lucide-react";
import SignOut from "../sign-out";
  

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  // menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594483/vector-logo-illustration-hexagon-gradient-colorful-style_116762-6152_1-removebg-preview_idzfyl.ico",
    alt: "logo",
    title: "DevConnect",
  },
}: NavbarProps) => {
  return (
    <section className="py-4 max-w-[1200px] px-4  mx-auto">
      <div className="container mx-auto">
        <nav className=" justify-between flex">
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
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };