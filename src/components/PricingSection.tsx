import { useState } from "react";
import { motion } from "framer-motion";
import pricingImg from "@/assets/home-1.jpg";

const cities = ["Москва", "Санкт-Петербург", "Казань", "Сочи", "Калининград"];
const nightOptions = [3, 5, 7, 14, 21, 30];

const PricingSection = () => {
  const [city, setCity] = useState("Сочи");
  const [selectedNights, setSelectedNights] = useState(5);

  const serviceFee = selectedNights * 1500;
  const hotelCost = selectedNights * 10000;

  return (
    <section id="pricing" className="py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto overflow-hidden rounded-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground p-10 md:p-14 flex flex-col justify-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-background mb-8 uppercase">
              Без оплаты проживания
              <br />
              внутри клуба
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="font-body text-sm font-semibold text-background mb-2 block">
                  Куда
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-background/20 text-background rounded-lg px-4 py-3 font-body border border-background/30 focus:ring-2 focus:ring-background/50 outline-none"
                >
                  {cities.map((c) => (
                    <option key={c} value={c} className="text-foreground">{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-body text-sm font-semibold text-background mb-2 block">
                  На сколько
                </label>
                <select
                  value={selectedNights}
                  onChange={(e) => setSelectedNights(Number(e.target.value))}
                  className="w-full bg-background/20 text-background rounded-lg px-4 py-3 font-body border border-background/30 focus:ring-2 focus:ring-background/50 outline-none"
                >
                  {nightOptions.map((n) => (
                    <option key={n} value={n} className="text-foreground">
                      {n} {n === 1 ? "ночь" : n < 5 ? "ночи" : "ночей"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-3 border-t border-background/20 pt-6">
              <div className="flex justify-between font-body text-background/80">
                <span>Дни для поездок</span>
                <span>{selectedNights} дней</span>
              </div>
              <div className="flex justify-between font-body text-background/80 border-b border-background/20 pb-3">
                <span>Сервисный сбор Privy</span>
                <span>{serviceFee.toLocaleString()} руб</span>
              </div>
              <div className="flex justify-between font-body text-background font-bold text-lg pt-1">
                <span>Итого</span>
                <span>{selectedNights} дней + {serviceFee.toLocaleString()} руб</span>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <p className="font-body text-background/60 text-sm">
                Обычный отель или аналогичный объект&nbsp;&nbsp;&nbsp;
                <span className="text-background/80 line-through">{hotelCost.toLocaleString()} руб</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <img
              src={pricingImg}
              alt="Интерьер квартиры"
              loading="lazy"
              width={720}
              height={720}
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
