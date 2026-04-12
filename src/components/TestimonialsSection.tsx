import { motion } from "framer-motion";

const AVATARS = {
  ivan:    "https://images.pexels.com/photos/31768384/pexels-photo-31768384.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1&fit=crop",
  maria:   "https://images.pexels.com/photos/3791554/pexels-photo-3791554.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1&fit=crop",
  dmitry:  "https://images.pexels.com/photos/29382977/pexels-photo-29382977.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1&fit=crop",
};

const testimonials = [
  {
    name: "Иван",
    location: "Апартаменты в Калининграде",
    quote: "Квартира раньше просто простаивала. За сезон накопил дней на две недели в Сочи — и это без единой посуточной сдачи.",
    result: "14 дней отдыха в Сочи за сезон",
    avatar: AVATARS.ivan,
    featured: false,
  },
  {
    name: "Мария",
    location: "Квартира в Геленджике",
    quote: "Боялась пускать незнакомых. Но когда увидела, что все проходят проверку и я сама выбираю — решилась. Теперь я принимаю гостей спокойно.",
    result: "Уже 3 поездки за год",
    avatar: AVATARS.maria,
    featured: true,
  },
  {
    name: "Дмитрий",
    location: "Апартамент в Санкт-Петербурге",
    quote: "Апартамент в управлении УК, есть лимит ночей. Принял двух участников — и использовал эти дни для поездок в Казань и Москву.",
    result: "Казань + Москва за один сезон",
    avatar: AVATARS.dmitry,
    featured: false,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center">
            Истории участников
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={[
                "group flex flex-col rounded-2xl border p-7 transition-shadow duration-300 hover:shadow-lg",
                t.featured
                  ? "bg-foreground border-primary-foreground/10 md:-mt-4"
                  : "bg-background border-border",
              ].join(" ")}
            >
              {/* Avatar + meta */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover object-top shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className={[
                    "font-heading text-sm font-semibold leading-tight",
                    t.featured ? "text-primary-foreground" : "text-foreground",
                  ].join(" ")}>
                    {t.name}
                  </p>
                  <p className={[
                    "font-body text-xs mt-0.5",
                    t.featured ? "text-primary-foreground/50" : "text-muted-foreground",
                  ].join(" ")}>
                    {t.location}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className={[
                "font-body text-base leading-relaxed flex-1",
                t.featured ? "text-primary-foreground/85" : "text-foreground/80",
              ].join(" ")}>
                «{t.quote}»
              </p>

              {/* Result chip */}
              <div className={["mt-6 pt-5 border-t", t.featured ? "border-primary-foreground/10" : "border-border"].join(" ")}>
                <span className={[
                  "font-body text-xs font-medium tracking-wide",
                  t.featured ? "text-primary" : "text-primary",
                ].join(" ")}>
                  ✦ {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
