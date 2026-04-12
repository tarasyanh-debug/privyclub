import { motion } from "framer-motion";
import citySpb from "@/assets/city-spb.jpg";

const CITY_IMGS = {
  moscow: "https://images.pexels.com/photos/12900775/pexels-photo-12900775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840&dpr=1",
  kazan:  "https://images.pexels.com/photos/11985954/pexels-photo-11985954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840&dpr=1",
  sochi:  "https://images.pexels.com/photos/14786125/pexels-photo-14786125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840&dpr=1",
  crimea: "https://images.pexels.com/photos/8707524/pexels-photo-8707524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840&dpr=1",
};

const cities = [
  { name: "Москва",          image: CITY_IMGS.moscow },
  { name: "Казань",          image: CITY_IMGS.kazan  },
  { name: "Санкт-Петербург", image: citySpb           },
  { name: "Сочи",            image: CITY_IMGS.sochi  },
  { name: "Крым",            image: CITY_IMGS.crimea },
];

const CityCard = ({
  name,
  image,
  delay,
}: {
  name: string;
  image: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer"
  >
    <img
      src={image}
      alt={name}
      loading="lazy"
      width={1260}
      height={840}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
    <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 font-heading font-bold text-primary-foreground text-sm sm:text-base md:text-lg leading-tight">
      {name}
    </p>
  </motion.div>
);

const ComingSoonCard = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-default bg-secondary/60"
  >
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground) / 0.12) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
    <div className="absolute inset-0 flex flex-col items-start justify-end p-3 sm:p-5">
      <p className="font-heading font-semibold text-foreground/80 text-sm sm:text-base md:text-lg leading-tight">
        Скоро
      </p>
      <p className="font-body text-xs sm:text-sm text-muted-foreground mt-0.5">
        и другие города
      </p>
    </div>
  </motion.div>
);

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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {cities.slice(0, 3).map((city, i) => (
            <CityCard key={city.name} {...city} delay={i * 0.1} />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {cities.slice(3, 5).map((city, i) => (
            <CityCard key={city.name} {...city} delay={(i + 3) * 0.1} />
          ))}
          <ComingSoonCard delay={0.5} />
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
