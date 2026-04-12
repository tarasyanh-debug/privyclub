import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import featureImg from "@/assets/home-3.jpg";

const features = [
  "Вы сами одобряете каждую заявку на размещение",
  "Мы организуем уборку до и после каждого гостя",
  "Поддержка 24/7 до и во время поездки",
  "Страховка до 5 000 000 ₽ с простым возмещением",
];

const FeaturesSection = () => {
  return (
    <section id="principles" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={featureImg}
              alt="Уютный дом"
              loading="lazy"
              width={720}
              height={720}
              className="w-full h-full object-cover aspect-square md:aspect-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-2 p-4">
              {["Удалёнщики", "С питомцами", "Семьи", "Соло"].map((tag) => (
                <span
                  key={tag}
                  className="bg-background/80 backdrop-blur-sm text-foreground font-body text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/50 p-6 sm:p-10 md:p-16 flex flex-col justify-center"
          >
            <p className="font-body text-sm text-primary uppercase tracking-widest mb-4">
              Размещение
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              Полная поддержка для новых хостов
            </h2>

            <div className="space-y-5">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 pb-5 border-b border-border last:border-b-0">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="font-body text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <Button className="mt-10 self-start" size="lg">
              Подробнее о размещении
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
