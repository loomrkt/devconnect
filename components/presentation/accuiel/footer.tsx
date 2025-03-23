"use client"

import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  Linkedin,
} from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const logo = {
  url: "/",
  src: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594483/vector-logo-illustration-hexagon-gradient-colorful-style_116762-6152_1-removebg-preview_idzfyl.ico",
  alt: "logo",
  title: "DevConnect",
}

const footerLinks = [
  {
    title: "Accuiel",
    href: "/",
  },
  {
    title: "Fonctionnalites",
    href: "/fonctionnalites",
  },
  {
    title: "Apropos",
    href: "/about",
  }
];

const FooterPage = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center gap-2">
            <CldImage
              width="40"
              height="40"
              src={logo.src}
              sizes="100vw"
              alt={logo.alt}
            />
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </Link>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-white font-medium"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              {logo.title}
            </Link>
            . Tous droits réservés. Designé et développé par{" "}
            <Link
              className="text-indigo-600"
              href="https://www.linkedin.com/in/nameno-fanantenana-rakotondrazaka-248a59283/"
              target="_blank"
            >
              Nameno Fanantenana Rakotondrazaka
            </Link>
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link
              href="https://www.linkedin.com/in/nameno-fanantenana-rakotondrazaka-248a59283/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Link>

            <Link href="https://github.com/loomrkt" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
