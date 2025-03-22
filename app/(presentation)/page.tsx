import { Metadata } from "next";
import { Hero3 } from "@/components/presentation/accuiel/hero";
import { Features } from "@/components/presentation/accuiel/features";
import { Faq } from "@/components/presentation/accuiel/faq";
import { Cta } from "@/components/presentation/accuiel/cta";
export const metadata: Metadata = {
  title: "DevConnect - accuiel",
  description: "Accuiel de DevConnect",
};

export default function Page() {
  return (
    <>
      <Hero3 />
      <Features />
      <Faq />
      <Cta />
    </>
  );
}
