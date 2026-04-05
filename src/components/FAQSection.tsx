import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Могу ли я участвовать, если я арендатор а не собственник?",
    a: "Поскольку между участниками нет денежного обмена, использование клуба — это не то же самое, что сдача жилья в аренду. Это больше похоже на то, как друг остаётся в вашем доме, пока вы в отъезде. Рекомендуем уточнить условия вашего договора аренды.",
  },
  {
    q: "Кто будет жить в моём объекте?",
    a: "Только верифицированные участники клуба. Каждый проходит проверку личности и модерацию объекта перед вступлением. Вы сами решаете, кого принять.",
  },
  {
    q: "Можно ли использовать личную квартиру?",
    a: "В клубе участвуют только объекты, предназначенные для гостей — сервисные апартаменты, вторые квартиры и дома. Личное жильё, в котором вы постоянно проживаете, не подходит.",
  },
  {
    q: "Можно ли купить кредиты?",
    a: "Нет, кредиты нельзя купить. Privy работает по принципу «разместил гостей — получил дни для поездок». Это гарантирует, что все участники вносят равный вклад.",
  },
  {
    q: "Сколько это стоит?",
    a: "Проживание внутри клуба бесплатное. Вы оплачиваете только сервисный сбор Privy за каждое бронирование. Никаких членских взносов или скрытых платежей.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          FAQ
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 font-body font-semibold text-foreground text-left hover:bg-secondary/50 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 font-body text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
