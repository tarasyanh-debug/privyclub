import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import InviteModal from "@/components/InviteModal";
import heroBg from "@/assets/hero-kindred.jpg";

const CTASection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <InviteModal open={open} onOpenChange={setOpen} />
    <section className="relative py-32 overflow-hidden">
      <img
        src={heroBg}
        alt="Современный дом"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Присоединитесь к клубу
            <br />
            на этапе пилота
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            Первые участники получают пожизненное членство без вступительного взноса.
          </p>
          <Button variant="hero" size="xl" onClick={() => setOpen(true)}>
            Подать заявку
          </Button>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default CTASection;
