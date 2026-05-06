import React from "react";

const Tape = () => {
    return (
        <div className="relative w-full overflow-hidden py-4">
            <div className="absolute inset-0 top-1 py-4 bg-fuchsia-500 -rotate-1"></div>
            <div className="relative w-full py-4 bg-fuchsia-900 -rotate-1 overflow-hidden">
                <div className="flex gap-12 animate-marquee">
                    {["Javascipt", "Tailwind", "React", "Next.js", "Node.js", "Express", "MongoDB", "Git"].map((item, index) => (
                        <span key={index}
                        className="text-white font-thin text-xl whitespace-nowrap">
                            {item}
                        </span>
                    ))}
                    {["Javascipt", "Tailwind", "React", "Next.js", "Node.js", "Express", "MongoDB", "Git"].map((item, index) => (
                        <span key={index}
                        className="text-white font-thin text-xl whitespace-nowrap">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tape;