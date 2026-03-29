import { useState } from "react";
import { motion } from "framer-motion";

const cities = ["Москва", "Санкт-Петербург", "Казань", "Сочи", "Калининград", "Нижний Новгород"];
const nights = [2, 3, 5, 7, 14, 21, 30];

const PricingSection = () => {
  const [city, setCity] = useState("Москва");
  const [selectedNights, setSelectedNights] = useState(5);

  const serviceFee = selectedNights * 500;
  const cleaningFee = 3000;
  const total = serviceFee + cleaningFee;
  const hotelCost = selectedNights * 6000;

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body text-sm uppercase tracking-widest text-accent font-semibold mb-4 block">
              Стоимость
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Без членских взносов.
              <br />
              Только уборка и сервисный сбор.
            </h2>

            <div className="space-y-6">
              <div>
                <label className="font-body text-sm font-medium text-muted-foreground mb-2 block">
                  Куда вы хотите поехать?
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 font-body border border-border focus:ring-2 focus:ring-primary outline-none"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-body text-sm font-medium text-muted-foreground mb-2 block">
                  На сколько ночей?
                </label>
                <div className="flex flex-wrap gap-2">
                  {nights.map((n) => (
                    <button
                      key={n}
                      onClick={() => setSelectedNights(n)}
                      className={`px-4 py-2 rounded-lg text-sm font-body transition-all ${
                        selectedNights === n
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                      }`}
                    >
                      {n} {n === 1 ? "ночь" : n < 5 ? "ночи" : "ночей"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
              Расчёт стоимости
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between font-body">
                <span className="text-muted-foreground">Кредиты</span>
                <span className="font-semibold text-foreground">{selectedNights} кредитов</span>
              </div>
              <div className="flex justify-between font-body">
                <span className="text-muted-foreground">Сервисный сбор</span>
                <span className="font-semibold text-foreground">₽{serviceFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-body">
                <span className="text-muted-foreground">Уборка</span>
                <span className="font-semibold text-foreground">₽{cleaningFee.toLocaleString()}</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between font-body">
                <span className="font-semibold text-foreground text-lg">Итого</span>
                <span className="font-bold text-foreground text-lg">
                  {selectedNights} кр. + ₽{total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="bg-secondary/80 rounded-xl p-4 mb-4">
              <div className="flex justify-between font-body">
                <span className="text-muted-foreground">Стандартный отель</span>
                <span className="font-semibold text-foreground line-through">₽{hotelCost.toLocaleString()}</span>
              </div>
            </div>

            <p className="font-body text-sm text-accent font-semibold text-center">
              Вы экономите до {Math.round((1 - total / hotelCost) * 100)}% по сравнению с отелем
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
