import React from "react";
import Section from "./Section";
import { Card } from "../../components/ui/card";
import { IProject } from "../../types/index";
import Link from "next/link";

const projects: IProject[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/e-commerce-website.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/task-manager.webp",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/portfolio-website.jpg",
  },
];

const ProjectSection = () => {
  return (
    <Section className="px-5 mt-3 text-gray-100">
      <h2 className="text-3xl font-bold text-center">Mes projets</h2>
      <div className="flex flex-col md:flex-col gap-8">
        {projects.map((project) => (
          <Card className="w-full flex-[3] flex flex-col rounded-lg shadown-md p-4 gap-2" key={project.title}>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-1 rounded-full bg-neutral shadow-xl text-content/80
                  text-sm border border-bleu
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
                className="flex items-center gap-2 text-secondary"
              >
                <span>code</span>
              </Link>
              <Link
                href={project.githubLink}
                className="flex items-center gap-2 text-secondary"
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
