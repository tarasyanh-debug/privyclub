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
    <section id="principles" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto overflow-hidden rounded-2xl">
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
            <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-4">
              {["Удалёнщики", "С питомцами", "Семьи", "Соло"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/80 backdrop-blur-sm text-foreground font-body text-xs px-3 py-1.5 rounded-full"
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
            className="bg-background p-10 md:p-16 flex flex-col justify-center"
          >
            <p className="font-body text-sm text-muted-foreground uppercase tracking-[0.15em] mb-4">
              Размещение
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-8 leading-tight">
              Полная поддержка для новых хостов
            </h2>

            <div className="space-y-5">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 pb-5 border-b border-border last:border-b-0">
                  <CheckCircle2 size={20} className="text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
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
