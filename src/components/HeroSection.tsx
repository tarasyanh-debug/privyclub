import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-kindred.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Top half: text content on light background */}
      <div className="flex-1 flex flex-col justify-end pb-12 pt-32 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.95] mb-8"
          >
            Путешествуйте
            <br />
            без аренды.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl"
          >
            Закрытое сообщество владельцев недвижимости для размещения гостей в разных городах.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button variant="default" size="xl" className="text-base uppercase tracking-wider px-12">
              Подходит ли мой дом?
            </Button>
            <Button variant="outline" size="xl" className="text-base uppercase tracking-wider px-12">
              Как это работает
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-body text-sm text-foreground/40"
          >
            Без прямого обмена &bull; Для отпусков и сезонных переездов &bull; Верифицированные владельцы
          </motion.p>
        </div>
      </div>

      {/* Bottom half: full-width apartment image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img
          src={heroBg}
          alt="Уютный интерьер апартаментов"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default HeroSection;
