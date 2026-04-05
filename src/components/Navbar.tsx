import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "О клубе", href: "#about" },
  { label: "Стоимость", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-heading text-2xl font-bold text-white tracking-[0.1em]">
          Privy
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-colors">
            Вход
          </a>
          <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            Подать заявку
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-foreground/95 backdrop-blur-md px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-body text-white/80 border-b border-white/10 text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" size="sm" className="flex-1 border-white/30 text-white hover:bg-white/10">Вход</Button>
            <Button variant="hero" size="sm" className="flex-1">Подать заявку</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
