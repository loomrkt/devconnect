"use client"
import { CldImage } from 'next-cloudinary';
import SignIn from '@/components/sign-in'; 
interface Hero3Props {
  heading?: string;
  description?: string;
}

const Hero3 = ({
  heading = "Partagez vos projets et connectez-vous avec d'autres developpeurs",
  description = "DevConnect est un reseau social pour les developpeurs. Partagez vos projets, vos idees et connectez-vous avec d'autres developpeurs",
}: Hero3Props) => {
  return (
    <section className="max-w-[1200px] px-4 py-10 sm:py-16 mx-auto">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-5xl">
            {heading}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <SignIn />
          </div>
        </div>
        <div className="relative h-[50svh] lg:h-full overflow-hidden rounded-md">
          <div className="absolute top-0 left-0 w-[500%] max-w-[45rem] overflow-hidden">
            <CldImage
              width="960"
              height="600"
              src="https://res.cloudinary.com/djqniifaa/image/upload/v1742594624/carbon_1_ucqv1p.png"
              sizes="100vw"
              alt="Description of my image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero3 };
