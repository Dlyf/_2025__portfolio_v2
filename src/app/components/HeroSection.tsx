import React from "react";
import Section from "./Section";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    // flex md:flex-col px-7 text-6xl font-extrabold
    <Section className="flex max-sm:flex-col items-start">
      {/* flex flex-col gap-2 */}
      <div className="flex-[2] text-amber-50 px-4">
        <h2 className="font-caption text-3xl">Dominique Lung Yut Fong</h2>
        <div className="text-7xl font-extrabold">
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
      {/* <fieldset aria-label="Choose a memory option">
        <div className="flex items-center justify-between">
          <div>RAM</div>
          <a href="#"> See performance specs </a>
        </div>
        <div className="mt-4 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
          <label className="p-2 pointer-coarse:p-4 ...">
            <input type="radio" name="memory-option" value="4 GB" className="sr-only" />
            <span>4 GB</span>
          </label>
  </div>
</fieldset> */}
      {/* <div className='container text-amber-6 px-4 '>
          </div>
          <div className='px-4  mb-5'>
            
          </div> */}
      {/* <div className='px-4'>
            <Button className='px-6' variant="outline">test</Button>
            <Button className='px-6 m-4' variant="outline">test</Button>

          </div> */}
    </Section>
  );
};

export default HeroSection;
