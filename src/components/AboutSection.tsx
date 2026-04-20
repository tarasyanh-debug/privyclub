import { motion } from "framer-motion";

const ABOUT_IMG = "https://images.pexels.com/photos/7851906/pexels-photo-7851906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840&dpr=1";

const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:py-14 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground p-8 md:p-10 flex flex-col justify-center"
          >
            <p className="font-body text-sm text-primary-foreground/40 uppercase tracking-widest mb-3">О клубе</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              В чём суть Privy
            </h2>
            <p className="font-body text-primary-foreground/70 leading-relaxed text-base">
              Когда у вас есть квартира, апартамент или дом, которые иногда пустуют — вы принимаете там участников клуба, а потом сами останавливаетесь у них в других городах — на дни или даже месяца.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-auto overflow-hidden"
          >
            <img
              src={ABOUT_IMG}
              alt="Уютная гостиная с тёплым светом"
              loading="lazy"
              width={1260}
              height={840}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0))" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
