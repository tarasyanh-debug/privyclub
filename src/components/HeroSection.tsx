import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import heroBg from "@/assets/hero-kindred.jpg";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ContactForm open={open} onOpenChange={setOpen} />
    <section className="relative min-h-[88vh] max-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-20">
      <img
        src={heroBg}
        alt="Уютный интерьер апартаментов"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-[1.05] mb-6"
        >
          Путешествуйте
          <br />
          без аренды.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl mx-auto"
        >
          Закрытое сообщество владельцев недвижимости для размещения гостей в разных городах.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <Button variant="hero" size="xl" className="px-10" onClick={() => setOpen(true)}>
            Подходит ли мой дом?
          </Button>
          <Button variant="heroOutline" size="xl" className="px-10" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
            Как это работает
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-sm text-primary-foreground/75 tracking-wide inline-flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 px-6 py-2.5 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/[0.1] mx-auto"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
        >
          <span>Без прямого обмена</span>
          <span className="w-px h-3 bg-primary-foreground/25 rounded-full" aria-hidden="true" />
          <span>Для отпусков и сезонных переездов</span>
          <span className="w-px h-3 bg-primary-foreground/25 rounded-full" aria-hidden="true" />
          <span>Верифицированные владельцы</span>
        </motion.p>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
