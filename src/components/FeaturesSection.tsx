import { motion } from "framer-motion";
import { Home, ShieldCheck, Palmtree, Headphones } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Только объекты для гостей",
    desc: "В клубе — сервисные апартаменты вторые квартиры и дома",
  },
  {
    icon: ShieldCheck,
    title: "Проверенные владельцы",
    desc: "Каждый участник и объект проходят модерацию перед вступлением в клуб",
  },
  {
    icon: Palmtree,
    title: "Для отпусков и сезонных переездов",
    desc: "От уикенда в столице до сезонного переезда к морю.",
  },
  {
    icon: Headphones,
    title: "Поддержка на связи",
    desc: "Мы всегда на связи — 24/7",
  },
];

const FeaturesSection = () => {
  return (
    <section id="principles" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <feature.icon size={28} className="text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-2 uppercase">
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
