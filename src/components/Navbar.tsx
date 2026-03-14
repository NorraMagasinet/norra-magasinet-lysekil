import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#om", label: "Om oss" },
  { href: "#lokaler", label: "Lokaler & Förråd" },
  { href: "#fordelar", label: "Fördelar" },
  { href: "#laget", label: "Läget" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container-narrow flex items-center justify-between h-16 px-6 md:px-12 lg:px-20">
        <a href="#start" className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
          Norra Magasinet
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-body font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
