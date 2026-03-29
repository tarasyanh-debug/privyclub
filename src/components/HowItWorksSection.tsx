import { motion } from "framer-motion";
import { KeyRound, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: KeyRound,
    title: "Отдай ночь — получи ночь",
    desc: "За каждую ночь, когда вы принимаете гостей, вы получаете 1 ночь для путешествия.",
  },
  {
    icon: ShieldCheck,
    title: "Только верифицированные участники",
    desc: "Каждый участник проходит проверку личности и своего жилья.",
  },
  {
    icon: Sparkles,
    title: "Уборка и защита до ₽5 000 000",
    desc: "Мы организуем уборку до и после каждого визита. Ущерб застрахован до ₽5 000 000.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Своим — закрытое сообщество путешественников,
            <br className="hidden md:block" />
            которые делятся своими настоящими домами
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--gold-gradient)" }}>
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
