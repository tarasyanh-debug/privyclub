import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "О клубе", href: "#about" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Гео", href: "#geography" },
  { label: "Принципы", href: "#principles" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-2xl font-bold text-foreground tracking-[0.15em] uppercase">
          Privy
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Вход</Button>
          <Button size="sm">Подать заявку</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-4 pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-body text-foreground border-b border-border/50 uppercase tracking-wider text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" size="sm" className="flex-1">Вход</Button>
            <Button size="sm" className="flex-1">Подать заявку</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
