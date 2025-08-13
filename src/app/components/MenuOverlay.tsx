import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "../data";

interface MenuOverlayProps {
  links: string;
  link: string;
  index: string;
}
const MenuOverlay = () => {
    return (
      <ul className="flex flex-col py-4 items-start">
        {
          navLinks.map((link, index) => (
              <li key={index}>
                  <NavLink href={link.href} title={link.label} />
              </li>
          ))
        }
      </ul>
    );
}

export default MenuOverlay;
