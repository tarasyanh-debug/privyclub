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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6"
            >
              <p className="font-heading text-xl font-bold text-foreground mb-4 uppercase">
                {t.name}
              </p>
              <p className="font-body font-semibold text-foreground mb-2">
                {t.location}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
