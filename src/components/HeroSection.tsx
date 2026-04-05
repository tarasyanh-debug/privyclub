import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-kindred.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      <img
        src={heroBg}
        alt="Уютный интерьер"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 font-body text-sm px-5 py-2 rounded-full border border-white/20">
            #1 Закрытый клуб обмена жильём
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] mb-6"
        >
          Путешествуйте
          <br />
          без аренды.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto"
        >
          Закрытое сообщество владельцев недвижимости для размещения гостей в разных городах.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button variant="hero" size="xl">
            Подходит ли мой дом?
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 z-10 text-center"
      >
        <p className="font-body text-xs text-white/50 uppercase tracking-[0.2em] mb-3">
          Без прямого обмена &bull; Для отпусков и сезонных переездов &bull; Верифицированные владельцы
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
