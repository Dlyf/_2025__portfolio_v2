interface NavLink {
    id: number;
    href: string;
    label: string;
};

export const navLinks: NavLink[] = [
    { id: 1, label: "Home", href: "#top" },
    { id: 2, label: "Experiences", href: "#experiences" },
    { id: 3, label: "Projects", href: "#projects" },
    { id: 4, label: "Contact", href: "#contact" }
  ];