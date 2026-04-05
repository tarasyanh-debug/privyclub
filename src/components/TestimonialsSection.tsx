import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Иван",
    location: "Апартаменты в Калининграде",
    text: "Квартира раньше просто простаивала. За сезон накопил дней на две недели в Сочи",
  },
  {
    name: "Мария",
    location: "Квартира в Геленджике",
    text: "Боялась пускать незнакомых. Но когда увидела что все проходят проверку и я сама выбираю кого принять — решилась. Уже три поездки.",
  },
  {
    name: "Дмитрий",
    location: "Апартамент в Санкт-Петербурге",
    text: "Апартамент в управлении УК, есть лимит ночей, который я раньше не использовал. Принял двух участников, использовал дни для поездок в Казань и Москву",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center"
        >
          Истории участников
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <span className="font-heading text-sm font-bold text-primary">{t.name[0]}</span>
              </div>
              <p className="font-heading text-lg font-semibold text-foreground mb-1">
                {t.name}
              </p>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {t.location}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                «{t.text}»
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
