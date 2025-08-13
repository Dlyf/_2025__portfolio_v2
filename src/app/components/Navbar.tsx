"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "../data";
import { AlignRight } from "lucide-react";
import { X } from "lucide-react";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import MenuOverlay from "./MenuOverlay";
// Créer un nav avec de la data fait avec data

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-opacity-100">
      <div className="flex flex-row container md:bg-amber-700 lg:py-4 flex-wrap justify-between mx-auto px-4 py-2 max-[36rem]:text-2xl font-bold ">
        <Link href={"/"}>
          My <span className="text-amber-500">portfolio</span>
        </Link>
        {/* mobile-menu  */}
        <div className="block ml-auto">
          {/* <Button className="bg-amber-500" variant="outline">test</Button> */}
          {!navbarOpen ? (
            <Button
              onClick={() => setNavbarOpen(true)}
              variant="outline"
              className="menu flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <AlignRight className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              onClick={() => setNavbarOpen(false)}
              variant="outline"
              className="menu flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        <div className=" mt-8 flex flex-col gap-4 max-[36rem]:block max-[36rem]:w-auto">
          <ul className="menu hidden p-4 text-2xl h-fit w-full max-[36rem]:flex-row">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
  {
    /* <div>
      <ul className=''>
          {navLinks.map((link, id) => (
              <li key={id}>
                  <NavLink href={link.href} title={link.label}/>
              </li>
          ))}
      </ul>
  </div> */
  }
};

export default Navbar;
