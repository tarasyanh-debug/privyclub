import { useState } from "react";
import { motion } from "framer-motion";
import home1 from "@/assets/home-1.jpg";
import home2 from "@/assets/home-2.jpg";
import home3 from "@/assets/home-3.jpg";
import home4 from "@/assets/home-4.jpg";
import home5 from "@/assets/home-5.jpg";
import home6 from "@/assets/home-6.jpg";

const cities = ["Все", "Москва", "Санкт-Петербург", "Казань", "Сочи", "Калининград", "Нижний Новгород"];

const homes = [
  { image: home1, name: "Анна", city: "Москва", desc: "Уютная квартира с видом на город" },
  { image: home2, name: "Михаил", city: "Санкт-Петербург", desc: "Элегантная квартира в центре" },
  { image: home3, name: "Елена", city: "Казань", desc: "Стильный лофт с высокими потолками" },
  { image: home4, name: "Дмитрий", city: "Сочи", desc: "Светлая квартира с видом на море" },
  { image: home5, name: "Ольга", city: "Красная Поляна", desc: "Уютное шале с камином" },
  { image: home6, name: "Сергей", city: "Калининград", desc: "Дизайнерская квартира с галереей" },
];

const HomesSection = () => {
  const [activeCity, setActiveCity] = useState("Все");

  return (
    <section id="homes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Более 10 000 домов
            <br />
            по всей России и СНГ
          </h2>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200 ${
                  activeCity === city
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homes.map((home, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]" style={{ boxShadow: "var(--shadow-card)" }}>
                <img
                  src={home.image}
                  alt={home.desc}
                  loading="lazy"
                  width={720}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-body font-semibold text-primary-foreground text-base">
                    Дом {home.name}
                  </p>
                  <p className="font-body text-primary-foreground/80 text-sm">
                    {home.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="font-body text-sm font-semibold text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity">
            Смотреть все дома →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomesSection;
