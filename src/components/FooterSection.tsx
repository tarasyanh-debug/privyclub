const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-heading text-xl font-bold text-background mb-4">Своим</h4>
            <p className="font-body text-background/60 text-sm leading-relaxed">
              Закрытая платформа обмена жильём для путешественников.
            </p>
          </div>
          <div>
            <h5 className="font-body font-semibold text-background mb-4 text-sm uppercase tracking-wider">Платформа</h5>
            <ul className="space-y-2">
              {["Как это работает", "Смотреть дома", "Стоимость", "Хостинг"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-background/60 text-sm hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-body font-semibold text-background mb-4 text-sm uppercase tracking-wider">Компания</h5>
            <ul className="space-y-2">
              {["О нас", "Блог", "Карьера", "Пресса"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-background/60 text-sm hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-body font-semibold text-background mb-4 text-sm uppercase tracking-wider">Поддержка</h5>
            <ul className="space-y-2">
              {["FAQ", "Связаться с нами", "Правила", "Конфиденциальность"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-background/60 text-sm hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-background/40 text-sm">
            © 2026 Своим. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
