import React from "react";
import Section from "./Section";
import { Separator } from "@/components/ui/separator";
import Tag from "./Tag";
import LinkCard from "./LinkCard";
import Image from "next/image";

const HeroSection = () => {
  const skills: Record<string, string[]> = {
    Langages: ["JavaScript", "TypeScript", "Node.js"],
    "Framework et Libraries": ["React", "Node.js", "Next.js", "TailwindCSS"],
    // Web: [
    //   "Sass",
    //   "TailwindCSS",
    //   "Firebase",
    //   "NoSQL",
    //   "SQL",
    //   "Heroku",
    //   "Netlify",
    //   "AWS",
    //   "GIT",
    //   "Docker",
    //   "Kubernetes",
    //   "GCP",
    // ],
    "Bases de données": ["PostgreSQL", "MongoDB", "MySQL"],
  };
  return (
    <Section className="flex max-sm:flex-col items-start mb-0">
      <div className="flex-[2] text-amber-50 px-4">
        <h2 className="mt-8 font-caption text-2xl">Dominique Lung Yut Fong</h2>
        <div className="text-5xl font-extrabold">
          <span>Développeur Full stack</span>
        </div>
        <h3 className="font-bold uppercase mt-25">à propos</h3>
        <Separator className="my-3 bg-white font-extrabold" />
        <div className="border mb-8 rounded-xs shadow-lg">
          <p className="text-base px-4">
            Développeur full stack - 2 ans d&apos;expérience ayant évolué au sein
            d&apos;Engie Ineo Cybersécurité, filiale du groupe Engie et 10 mois dans
            le domaine des objets connectés (IoT).
            <br /> <br />
            J&apos;ai eu l&apos;opportunité de participer au développement d&apos;applications
            web existantes, en collaboration avec les équipes produit et design,
            à partir de maquettes Figma et avec l&apos;écosystème JavaScript (React,
            Next.js, TypeScript).
            <br /> <br />
            Ces expériences m&apos;ont permis de renforcer mes compétences
            techniques, ainsi que mon autonomie, ma curiosité et ma capacité à
            travailler en équipe pour mener à bien des projets.
          </p>
        </div>
        <LinkCard />
      </div>
      <div className="flex-[1] max-[36rem]:m-auto mt-8 max-[36rem]:hidden max-[36rem]:mb-0 mb-0">
        <Image 
          width={200}
          height={300}
          className="max-md:m-auto md:m-auto max-[36rem]:m-auto mx-auto h-[200px] aspect-square rounded-full shadow-lg"
          src="https://media.licdn.com/dms/image/v2/D4E03AQGsectNeu7w6Q/profile-displayphoto-crop_800_800/B4EZ0cK9LWJAAI-/0/1774294129586?e=1779926400&v=beta&t=iKt7gY3yHg9mtH4YV1VWvFhi4YTtYebu-8XQgtamFW4"
          alt="image photo"
        />
        <div className="max-w-4xl max-[36rem]:hidden">
          <Section className="max-w-4xl mx-auto px-5 text-gray-100 border">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-bold text-center">Mes infos</h2>
              <div className="">
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:demoemail@gmail.com" className="">
                  demoEmail@gmail.com
                </a>
              </div>
              <div className="">
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/jamezmca"
                  target="_blank"
                  className="text-cyan-500"
                >
                  jamezmca
                </a>
              </div>
              <div className="">
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/jamezmcarthur/ "
                  target="_blank"
                  className="text-cyan-500"
                >
                  James McArthur
                </a>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center">Mes compétences</h2>
            <ul className="flex flex-wrap gap-2">
              {Object.keys(skills).map((skill, index) => {
                return (
                  <div className="max-[36rem]:mb-8" key={index}>
                    <h3 className="text-lg">{skill}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills[skill].map((skill) => {
                        return <Tag key={skill} name={skill} />;
                      })}
                    </div>
                  </div>
                );
              })}
            </ul>
          </Section>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
