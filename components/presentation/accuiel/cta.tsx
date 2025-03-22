import { Check } from "lucide-react";

import SignIn from "@/components/sign-in";

const Cta = () => {
  return (
    <section className="py-10 sm:pb-32 max-w-[1200px] px-4 mx-auto">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
          <div className="">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
            DevConnect
            </h4>
            <p className="text-muted-foreground">
            En rejoignant DevConnect, vous vous engagez à respecter ces principes pour une expérience enrichissante et sécurisée !
            </p>
            <div className="mt-5">
                <SignIn />
            </div>
          </div>
          <div className="w-full max-w-sm">
            <ul className="flex w-full flex-col space-y-2 text-sm font-medium sm:text-base">
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Communauté & Collaboration
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Authenticité & Qualité
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Transparence & Sécurité 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
