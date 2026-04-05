const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <h4 className="font-heading text-2xl font-bold text-background tracking-[0.15em] uppercase mb-3">
            Privy
          </h4>
          <p className="font-body text-background/60 text-sm uppercase tracking-wider">
            Сообщество владельцев качественной недвижимости.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-background/10 pt-6">
          <p className="font-body text-background/40 text-sm mb-4 md:mb-0">
            © 2026 Privy
          </p>
          <div className="flex gap-8">
            {["Условия", "Политика конфиденциальности", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-background/60 text-sm hover:text-background transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
