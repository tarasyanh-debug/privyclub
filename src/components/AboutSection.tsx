import { motion } from "framer-motion";
import aboutImg from "@/assets/home-1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground p-10 md:p-16 flex flex-col justify-center"
          >
            <p className="font-body text-sm text-primary-foreground/40 uppercase tracking-widest mb-4">О клубе</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
              В чём суть Privy
            </h2>
            <p className="font-body text-primary-foreground/70 leading-relaxed text-base md:text-lg">
              Когда у вас есть квартира, апартамент или дом, которые иногда пустуют — вы принимаете там участников клуба, а потом сами останавливаетесь у них в других городах — на дни или даже месяца.
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
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
