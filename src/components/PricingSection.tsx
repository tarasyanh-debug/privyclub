import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const PRICING_IMG = "https://images.pexels.com/photos/4740484/pexels-photo-4740484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840&dpr=1";

const cities = ["Москва", "Санкт-Петербург", "Казань", "Сочи", "Калининград"];
const nightOptions = [3, 5, 7, 14, 21, 30];

const PricingSection = () => {
  const [city, setCity] = useState("Сочи");
  const [selectedNights, setSelectedNights] = useState(5);

  const serviceFee = selectedNights * 1500;
  const hotelCost = selectedNights * 10000;
  const savings = hotelCost - serviceFee;

  return (
    <section id="pricing" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl bg-secondary/50">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 md:p-14 flex flex-col justify-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
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
                  className="w-full bg-background text-foreground rounded-xl px-4 py-3 font-body border border-border focus:ring-2 focus:ring-primary/30 outline-none appearance-none cursor-pointer"
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
                  className="w-full bg-background text-foreground rounded-xl px-4 py-3 font-body border border-border focus:ring-2 focus:ring-primary/30 outline-none appearance-none cursor-pointer"
                >
                  {nightOptions.map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "ночь" : n < 5 ? "ночи" : "ночей"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="font-body text-sm font-semibold text-foreground mb-4">Примерная стоимость</p>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex justify-between font-body text-muted-foreground">
                <span>Ночи</span>
                <span>{selectedNights} {selectedNights === 1 ? "ночь" : selectedNights < 5 ? "ночи" : "ночей"}</span>
              </div>
              <div className="flex justify-between font-body text-muted-foreground">
                <span>Сервисный сбор</span>
                <span>{serviceFee.toLocaleString()} ₽</span>
              </div>
              <div className="border-t border-border my-2" />
              <div className="flex justify-between font-body text-foreground font-bold text-lg">
                <span>Итого</span>
                <span>{selectedNights} {selectedNights === 1 ? "ночь" : selectedNights < 5 ? "ночи" : "ночей"} + {serviceFee.toLocaleString()} ₽</span>
              </div>
            </div>

            <div className="mt-4 pt-2 space-y-2">
              <div>
                <p className="font-body text-xs text-muted-foreground/70 uppercase tracking-wide mb-0.5">
                  Обычный отель
                </p>
                <p className="font-body text-base font-medium text-foreground/60 line-through decoration-foreground/40 decoration-2">
                  {hotelCost.toLocaleString()} ₽
                </p>
              </div>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-body text-sm text-muted-foreground">Экономия:</span>
                <span className="font-body text-lg font-semibold text-primary">
                  {savings.toLocaleString()} ₽
                </span>
              </div>
            </div>

            <Button className="mt-8 self-start" size="lg">
              Подробнее о ценах
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block relative overflow-hidden"
          >
            <img
              src={PRICING_IMG}
              alt="Уютная гостиная с утренним светом"
              loading="lazy"
              width={1260}
              height={840}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.05), rgba(0,0,0,0))" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
