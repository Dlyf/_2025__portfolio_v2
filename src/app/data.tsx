interface NavLink {
    id: number;
    href: string;
    label: string;
};

export const navLinks: NavLink[] = [
    { id: 1, label: "Home", href: "#top" },
    { id: 2, label: "Experiences", href: "#experiences" },
    { id: 3, label: "About", href: "#about" },
    { id: 4, label: "Projects", href: "#projects" },
    { id: 5, label: "Contact", href: "#contact" }
  ];