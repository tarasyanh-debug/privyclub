import { motion } from "framer-motion";

const stats = [
  { value: "50 000+", label: "Забронированных ночей" },
  { value: "10 000+", label: "Участников и домов" },
  { value: "90+", label: "Городов" },
  { value: "₽250M+", label: "Сэкономлено на путешествиях" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Присоединяйтесь к самому быстрорастущему
            <br className="hidden md:block" />
            сообществу путешественников
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="font-body text-primary-foreground/70 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
