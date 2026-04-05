import { motion } from "framer-motion";
import aboutImg from "@/assets/home-1.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={aboutImg}
              alt="Уютный интерьер для обмена"
              loading="lazy"
              width={720}
              height={512}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              В ЧЕМ СУТЬ PRIVY
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              Когда у вас есть квартира, апартамент или дом, которые иногда пустуют — 
              Вы принимаете там участников клуба, а потом сами останавливаетесь у них 
              в других городах — на дни или даже месяца.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
