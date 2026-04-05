import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-start pt-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8"
        >
          Путешествуйте
          <br />
          без аренды
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
        >
          Закрытое сообщество владельцев недвижимости для размещения гостей в разных городах.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="default" size="xl" className="uppercase tracking-wider">
            Подходит ли мой дом?
          </Button>
          <Button variant="outline" size="xl" className="uppercase tracking-wider">
            Как это работает
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-sm text-muted-foreground mt-8"
        >
          Без прямого обмена &bull; Для отпусков и сезонных переездов &bull; Верифицированные владельцы
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
