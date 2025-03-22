import {
    GitPullRequest,
    RadioTower,
    SquareKanban,
  } from "lucide-react";
  
  interface Reason {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  interface FeaturesProps {
    heading?: string;
    reasons?: Reason[];
  }
  
  const Features = ({
    heading = "Pourquoi nous choisir",
    reasons = [
        {
            title: "Un réseau pour évoluer professionnellement",
            description:
              "Connectez-vous avec d’autres développeurs et boostez votre carrière.",
            icon: <RadioTower className="size-6" />,
          },
      {
        title: "Une communauté de développeurs engagée",
        description:"Échangez, collaborez et trouvez des partenaires pour vos projets.",
        icon: <GitPullRequest className="size-6" />,
      },
      {
        title: "Un espace pour partager et valoriser vos compétences",
        description:
          "Publiez vos projets, recevez des feedbacks et suivez les dernières tendances tech.",
        icon: <SquareKanban className="size-6" />,
      },
    ],
  }: FeaturesProps) => {
    return (
      <section className="py-10 sm:py-32 max-w-[1200px] px-4 mx-auto">
        <div className="container">
          <div className="mb-10 md:mb-20">
            <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
              {heading}
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={i} className="flex flex-col text-center sm:text-start">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent mx-auto sm:mx-0">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export { Features };
  