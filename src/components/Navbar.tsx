import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "О клубе", href: "#about" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Гео", href: "#geography" },
  { label: "Принципы", href: "#features" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-10">
        <a href="#" className="font-heading text-xl font-bold text-primary tracking-tight">
          Privy
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">
            Вход
          </a>
          <Button variant="default" size="sm">
            Подать заявку
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-t border-border px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-body text-foreground/70 border-b border-border text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" size="sm" className="flex-1">Вход</Button>
            <Button variant="default" size="sm" className="flex-1">Подать заявку</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
