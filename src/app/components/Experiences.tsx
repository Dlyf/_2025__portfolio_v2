import React from "react";
import { IExperiences } from "../../types/index";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Section from "./Section";

const EXPERIENCES: IExperiences[] = [
  {
    title: "E-commerce Platform",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQFvRGFuqFC42Q/company-logo_100_100/company-logo_100_100/0/1630529401436/weenect_logo?e=1762387200&v=beta&t=s6dq43SxvsuYr5qctqS10YUT9rNcxvpwJp5CG1XrQAw",
    role: "Développeur Full Stack",
    date: "Janvier 2022 - Juin 2022",
    url: "test.com",
  },
  {
    title: "E-commerce Platform2",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQEY0HUKZF-hcg/company-logo_100_100/company-logo_100_100/0/1730719809971/engie_solutions_logo?e=1762387200&v=beta&t=SUXJ9jWw4M203UdTk9NCwQnlctlIzpQh-Bv4umnkE7U",
    role: "Développeur Full Stack",
    date: "Janvier 2022 - Juin 2022",
    url: "test1.com",
  },
];

const Experiences = () => {
  return (
    <Section className="px-5 mt-3 text-gray-100">
      <h2 className="text-3xl font-bold text-center">Mes expériences</h2>
      <Card className='w-full flex-[3] flex flex-col rounded-lg shadow-md p-4 gap-2'>
        {EXPERIENCES.map((experience) => (
          <div className="w-full flex-[2]" key={experience.title}>
            <Link
              href={experience.url}
              className="w-full inline-flex items-center gap-4 bg-accent text-accent-foreground hover:bg-slate-300 transition-colors rounded"
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="w-10 h-10 object-contain rounded-md"
              />
              <div>
                <p className="text-muted-foreground text-sm">
                  {experience.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {experience.role}
                </p>
              </div>
              <div className="mr-auto">
                <p className="text-muted-foreground text-sm">
                  {experience.date}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Card>
    </Section>
  );
};

export default Experiences;
