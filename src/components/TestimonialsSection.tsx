import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Мы забронировали 6 поездок по России всего за ₽25 000! У нас 31 ночь в Москве, Петербурге, Казани и Сочи. Это путешествие мечты, которое было бы невозможно без Своим.",
    name: "Алина К.",
    nights: 67,
  },
  {
    text: "Я путешествую соло уже 10 лет и с годами всё сложнее находить комфортное жильё в рамках бюджета. Своим позволяет мне продолжать путешествовать, не жертвуя бюджетом на активности.",
    name: "Дарья С.",
    nights: 120,
  },
  {
    text: "Гости через Своим относятся к твоему дому с невероятной заботой. Ощущение, что тебя тихо поддерживают — бесценно. Это настоящее сообщество, а не просто сервис.",
    name: "Роман Д.",
    nights: 109,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          Истории наших участников
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-body font-semibold text-foreground">{t.name}</p>
                <span className="font-body text-sm text-muted-foreground">
                  {t.nights} ночей обмена
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
