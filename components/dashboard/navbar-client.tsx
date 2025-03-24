"use client"
import { CldImage } from "next-cloudinary";
import Link from "next/link";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import UserDrop from "./userDrop";

interface NavbarClientProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  user: {
    name: string;
    image: string;
    email: string;
    githubUrl: string;
  };
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
    <section className=" w-screen bg-neutral-950 shadow-md shadow-amber-50/5">
      <div className="container max-w-[1200px] mx-auto py-2  px-4">
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
          <UserDrop user={user} />
        </nav>
      </div>
    </section>
  );
};

export { NavbarClient };