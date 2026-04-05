import { motion } from "framer-motion";
import { Home, ShieldCheck, Palmtree, Headphones } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Только объекты для гостей",
    desc: "В клубе — специальные квартиры, вторые квартиры и дома.",
  },
  {
    icon: ShieldCheck,
    title: "Проверенные владельцы",
    desc: "Каждый участник и его объект проходят верификацию перед вступлением в клуб.",
  },
  {
    icon: Palmtree,
    title: "Для отпусков и сезонных переездов",
    desc: "От уикенда в столице до сезонных переездов к морю.",
  },
  {
    icon: Headphones,
    title: "Поддержка на связи",
    desc: "Мы всегда на связи — 24/7.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                style={{ background: "var(--gold-gradient)" }}
              >
                <feature.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
