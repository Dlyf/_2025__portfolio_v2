import React from "react";

const skills = [
    "Javascript",
    "Tailwind",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
];
const Tape = () => {
    return (
        <div className="relative w-full overflow-hidden py-4">
            <div className="absolute inset-0 top-1 py-4 bg-fuchsia-500 -rotate-1"></div>
            <div className="relative w-full py-4 bg-fuchsia-900 -rotate-1 overflow-hidden">
            <div className="flex min-w-max gap-12 animate-marquee">
          {[...skills, ...skills].map((item, index) => (
            <span
              key={index}
              className="text-white text-xl whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>            </div>
        </div>
    );
}

export default Tape;