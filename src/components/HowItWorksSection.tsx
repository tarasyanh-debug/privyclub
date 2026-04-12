import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Подайте заявку",
    desc: "Расскажите о своей недвижимости — квартире, апартаментах или доме.",
  },
  {
    num: "02",
    title: "Пройдите верификацию",
    desc: "Проверим объект и вас как владельца. После — открываем доступ в клуб.",
  },
  {
    num: "03",
    title: "Путешествуйте проще",
    desc: "Выбирайте жильё в других городах и планируйте поездки и сезонные переезды.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Как это работает
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Простой путь в клуб владельцев недвижимости для поездок и сезонных переездов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 font-heading font-bold text-xs tracking-widest">
                {step.num}
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
