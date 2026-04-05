import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import pricingImg from "@/assets/home-2.jpg";

const cities = ["Москва", "Санкт-Петербург", "Казань", "Сочи", "Калининград"];
const nightOptions = [3, 5, 7, 14, 21, 30];

const PricingSection = () => {
  const [city, setCity] = useState("Сочи");
  const [selectedNights, setSelectedNights] = useState(5);

  const serviceFee = selectedNights * 1500;
  const hotelCost = selectedNights * 10000;

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto overflow-hidden rounded-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/60 p-10 md:p-14 flex flex-col justify-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-2 leading-tight">
              Без оплаты проживания
              <br />
              внутри клуба.
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">
                  Куда
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-background text-foreground rounded-xl px-4 py-3 font-body border border-border focus:ring-2 focus:ring-foreground/20 outline-none appearance-none cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">
                  На сколько
                </label>
                <select
                  value={selectedNights}
                  onChange={(e) => setSelectedNights(Number(e.target.value))}
                  className="w-full bg-background text-foreground rounded-xl px-4 py-3 font-body border border-border focus:ring-2 focus:ring-foreground/20 outline-none appearance-none cursor-pointer"
                >
                  {nightOptions.map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "ночь" : n < 5 ? "ночи" : "ночей"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="font-body text-sm font-medium text-foreground mb-4">Примерная стоимость</p>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex justify-between font-body text-muted-foreground">
                <span>Кредиты</span>
                <span>{selectedNights} кредитов</span>
              </div>
              <div className="flex justify-between font-body text-muted-foreground">
                <span>Сервисный сбор</span>
                <span>{serviceFee.toLocaleString()} ₽</span>
              </div>
              <div className="border-t border-border my-2" />
              <div className="flex justify-between font-body text-foreground font-semibold text-lg">
                <span>Итого</span>
                <span>{selectedNights} кредитов + {serviceFee.toLocaleString()} ₽</span>
              </div>
            </div>

            <div className="mt-4 pt-2">
              <p className="font-body text-muted-foreground text-sm">
                Обычный отель&nbsp;&nbsp;
                <span className="line-through">{hotelCost.toLocaleString()} ₽</span>
              </p>
            </div>

            <Button className="mt-8 self-start" size="lg">
              Подробнее о ценах
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block relative"
          >
            <img
              src={pricingImg}
              alt="Интерьер квартиры"
              loading="lazy"
              width={720}
              height={720}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
