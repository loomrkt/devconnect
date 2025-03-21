import { Navbar1 } from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevConnect - accuiel",
    description: "Accuiel de DevConnect",
  };

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <Navbar1/>
            {children}
        </section>
    );
}