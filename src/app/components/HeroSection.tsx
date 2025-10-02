import React from "react";
import Section from "./Section";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    <Section className="flex max-sm:flex-col items-start">
      <div className="flex-[2] text-amber-50 px-4">
        <h2 className="font-caption text-2xl">Dominique Lung Yut Fong</h2>
        <div className="text-5xl font-extrabold">
          <span>Développeur Full stack</span>
        </div>
        <h3 className="font-bold uppercase">à propos</h3>
        <Separator className="my-3 bg-white font-extrabold" />
        <div className="border mb-4 rounded-xs ">
          <p className="text-base px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            animi, esse quaerat unde inventore sequi temporibus nulla veniam
            repellat soluta ipsam quae maiores quisquam laborum nisi culpa
            fugit. Laborum, quia? <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            animi, esse quaerat unde inventore sequi temporibus nulla veniam
            repellat soluta ipsam quae maiores quisquam laborum nisi culpa
            fugit. Laborum, quia? <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            animi, esse quaerat unde inventore sequi temporibus nulla veniam
            repellat soluta ipsam quae maiores quisquam laborum nisi culpa
            fugit. Laborum, quia?
          </p>
        </div>
      </div>
      <div className=" flex-[1] max-[36rem]:m-auto">
        <img
          className="max-md:m-auto md:m-auto max-[36rem]:m-auto ml-auto"
          src="https://media.licdn.com/dms/image/v2/D4E03AQFGITVlx-_-AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723117015218?e=1758758400&v=beta&t=cF3Y9JQ_x5aCKKVY8QOioiai74q71tcbNX6yqKa2fEo"
          alt="image photo"
        />
      </div>
    </Section>
  );
};

export default HeroSection;
