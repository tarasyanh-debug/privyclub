import { motion } from "framer-motion";
import cityMoscow from "@/assets/city-moscow.jpg";
import cityKazan from "@/assets/city-kazan.jpg";
import citySpb from "@/assets/city-spb.jpg";
import citySochi from "@/assets/city-sochi.jpg";
import cityCrimea from "@/assets/city-crimea.jpg";

const cities = [
  { name: "Москва", image: cityMoscow },
  { name: "Казань", image: cityKazan },
  { name: "Санкт-Петербург", image: citySpb },
  { name: "Сочи", image: citySochi },
  { name: "Крым", image: cityCrimea },
];

const GeographySection = () => {
  return (
    <section id="geography" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14"
        >
          География
        </motion.h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {cities.slice(0, 3).map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 font-heading font-bold text-primary-foreground text-lg">
                {city.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cities.slice(3, 5).map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 font-heading font-bold text-primary-foreground text-lg">
                {city.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
