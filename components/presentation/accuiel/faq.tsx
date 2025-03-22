"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CldImage } from "next-cloudinary";

interface FaqItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: 1,
    title: "Qu’est-ce que DevConnect ?",
    image: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594483/vector-logo-illustration-hexagon-gradient-colorful-style_116762-6152_1-removebg-preview_idzfyl.ico",
    description:
      "DevConnect est une plateforme dédiée aux développeurs permettant de partager leurs projets, poser des questions techniques et se connecter avec d'autres passionnés du code.",
  },
  {
    id: 2,
    title: "Comment créer un compte ?",
    image: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594624/carbon_1_ucqv1p.png",
    description:
      "L'inscription est rapide et gratuite ! Vous pouvez vous connecter via GitHub",
  },
  {
    id: 3,
    title: "Puis-je modifier ou supprimer mes publications ?",
    image: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594624/carbon_1_ucqv1p.png",
    description:
      "Oui ! Vous avez un contrôle total sur vos posts et commentaires. Vous pouvez les modifier ou les supprimer à tout moment.",
  },
  {
    id: 4,
    title: "Comment interagir avec d’autres développeurs ?",
    image: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594624/carbon_1_ucqv1p.png",
    description:
      "Vous pouvez suivre des utilisateurs, liker et commenter leurs publications, et même collaborer sur des projets via la plateforme.",
  },
  {
    id: 5,
    title: "DevConnect est-il gratuit ?",
    image: "https://res.cloudinary.com/djqniifaa/image/upload/v1742594624/carbon_1_ucqv1p.png",
    description:
      "Oui, l'accès à la plateforme et ses fonctionnalités principales sont entièrement gratuits !",
  },
];

const Faq = () => {
  const Faqs = defaultFaqs;
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(Faqs[0].image);

  return (
    <section className="py-10 sm:py-32 max-w-[1200px] px-4 mx-auto">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block w">
            <img
              src={activeImage}
              alt="Faq preview"
              className="aspect-[4/3] rounded-md object-cover pl-4 h-full w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {Faqs.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden w-full h-full">
                      <CldImage
                        className="aspect-[4/3] rounded-md object-cover pl-4 w-full h-full"
                        width={300}
                        height={200}
                        src={tab.image}
                        alt={tab.title}
                        />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };
