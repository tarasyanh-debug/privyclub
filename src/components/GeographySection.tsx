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
    <section id="geography" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 uppercase"
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
              className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading font-bold text-background text-lg uppercase tracking-wider">
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
              className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading font-bold text-background text-lg uppercase tracking-wider">
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
