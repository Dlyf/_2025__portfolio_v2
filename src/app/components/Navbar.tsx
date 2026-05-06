"use client";
import { cn } from "@/lib/utils"

import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "../data";
import { AlignRight } from "lucide-react";
import { X } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuOverlay from "./MenuOverlay";
// Créer un nav avec de la data fait avec data

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // Fixer le sticky du navbar
    <nav className="shadow-2xs">
      <div className="px-8 flex items-center gap-6">
        {/* <Link className="font-bold whitespace-nowrap shrink-0" href={"/"}>
          My <span className="text-amber-500">portfolio</span>
        </Link> */}
        <div className="container mx-auto flex justify-between lg:justify-start items-center py-4">
          <ul className="max-[36rem]:hidden flex items-center space-x-1.5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.label} />
              </li>
            ))}
          </ul>
        </div>
        <div className="block ml-auto sm:hidden">
          {!navbarOpen ? (
            <Button
              onClick={() => setNavbarOpen(true)}
              variant="outline"
              className="menu flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200
               hover:text-white hover:border-white w-full md:w-auto"
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
