import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-kindred.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src={heroBg}
        alt="Современный дом"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            Присоединитесь к клубу
            <br />
            на этапе пилота
          </h2>
          <p className="font-body text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Первые участники получают пожизненное членство без вступительного взноса.
          </p>
          <Button variant="hero" size="xl">
            Подать заявку
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
