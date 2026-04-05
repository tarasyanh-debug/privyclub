import { motion } from "framer-motion";
import aboutImg from "@/assets/home-1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-0 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto overflow-hidden rounded-2xl" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground p-10 md:p-14 flex flex-col justify-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-background mb-6">
              В ЧЕМ СУТЬ PRIVY
            </h2>
            <p className="font-body text-background/80 leading-relaxed text-base md:text-lg">
              Когда у вас есть квартира, апартамент или дом, которые иногда пустуют - Вы принимаете там участников клуба, а потом сами останавливаетесь у них в других городах - на дни или даже месяца.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-auto"
          >
            <img
              src={aboutImg}
              alt="Уютный интерьер"
              loading="lazy"
              width={720}
              height={512}
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
