import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Уютный дом для обмена"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block font-body text-sm tracking-widest uppercase text-primary-foreground/80 mb-4">
            №1 платформа обмена жильём в России
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Меняйтесь домами.
          <br />
          <span className="italic font-medium">Путешествуйте свободно.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto"
        >
          Закрытое сообщество для обмена жильём. Проживите до 5 ночей, прежде чем принять гостей. Для арендаторов и собственников.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl">
            Подходит ли моё жильё?
          </Button>
          <Button variant="heroOutline" size="xl">
            Как это работает
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
