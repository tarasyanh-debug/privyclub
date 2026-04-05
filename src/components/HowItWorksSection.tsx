import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Размещайте участников клуба",
    desc: "Вы сами выбираете даты, когда готовы принимать гостей клуба в своём объекте.",
  },
  {
    num: "02",
    title: "Получайте дни или месяца для поездок",
    desc: "За каждое проживание вы получаете дни, которые можно использовать внутри клубной сети.",
  },
  {
    num: "03",
    title: "Путешествуйте в другие города",
    desc: "Выбирайте подходящий объект и планируйте поездки без прямого обмена и совпадения по датам.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-[0.15em]">
            Как это работает
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="font-heading text-4xl font-light text-muted-foreground mb-4">
                {step.num}
              </p>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 uppercase">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
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
