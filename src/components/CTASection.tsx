import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Начните с 5 бесплатных ночей
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
            Новые участники получают 5 кредитов при регистрации, чтобы вы могли забронировать путешествие прямо сейчас.
          </p>
          <Button variant="hero" size="xl">
            Подходит ли моё жильё?
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
