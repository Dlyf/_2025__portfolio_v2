import React from "react";
import Section from "./Section";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import { IProject } from "../../types/index";
import Link from "next/link";
import Image from "next/image";

const projects: IProject[] = [
  {
    title: "Allergy Checker",
    description:
      "Une solution permettant de vérifier les allergies dans ta nourriture en scannant un code-barres ou en recherchant un produit.",
    technologies: ["React", "Material-UI", "MongoDB", "Express"],
    githubLink: "https://github.com/Dlyf/React-allergy-checker",
    demoLink: "https://allergy-checker.netlify.app/",
    image: "https://dlyf.github.io/portfolio2022/img/testAllergyChecker.png",
  },
  {
    title: "Panda Club",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "https://dlyf.github.io/portfolio2022/img/testAllergyChecker.png",
  },
  {
    title: "E-commerce Platform3",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "https://dlyf.github.io/portfolio2022/img/testAllergyChecker.png",
  },
];

const ProjectSection = () => {
  return (
    <Section className=" py-7 px-4">
      <h2 className="mt-8 text-3xl font-bold text-center text-amber-50">Mes projets</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {projects.map((project) => (
          <Card className="mx-auto py-7 px-4" key={project.title}>
            <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
            </div>
            <CardDescription className="text-amber-50 mb-4">{project.description}</CardDescription>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-1 rounded-full bg-white shadow-xl text-content/80
                  text-sm border border-amber-50
                  hover:bg-sky-500 flex items-center
                  gap-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-5 mt-2">
              <Link
                href={project.githubLink}
                className="flex items-center gap-2 text-secondary bg-amber-50 rounded-full"
              >
                <span>code</span>
              </Link>
              <Link
                href={project.githubLink}
                className="flex items-center gap-2 text-secondary bg-amber-50 rounded-full"
              >
                <span>code</span>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
// 50:49 https://www.youtube.com/watch?v=G8ZQo5S1db0&t=2580s
export default ProjectSection;
