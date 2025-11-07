import React from "react";
import Section from "./Section";
import Tag from "./Tag";

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

const Skills = () => {
  return (
    <div className="mt-9 max-w-4xl">
      <Section className="max-w-4xl mx-auto px-5 text-gray-100 border-hidden">
      <h2 className="text-3xl font-bold text-center">Mes compétences</h2>
        <ul className="flex flex-wrap gap-2">
          {Object.keys(skills).map((skill, index) => {
            return (
              <div key={index}>
                <h3 className="text-lg">{skill}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills[skill].map(skill => {
                    return (
                      <Tag key={skill} name={skill} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </ul>
      </Section>
    </div>
  );
};

export default Skills;
