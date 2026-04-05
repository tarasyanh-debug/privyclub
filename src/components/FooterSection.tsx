const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h4 className="font-heading text-2xl font-medium text-white tracking-[0.1em] mb-3">
            Privy
          </h4>
          <p className="font-body text-white/50 text-sm">
            Сообщество владельцев качественной недвижимости.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 pt-6">
          <p className="font-body text-white/30 text-sm mb-4 md:mb-0">
            © 2026 Privy
          </p>
          <div className="flex gap-8">
            {["Условия", "Конфиденциальность", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-white/50 text-sm hover:text-white transition-colors"
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
