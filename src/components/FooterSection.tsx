const FooterSection = () => {
  return (
    <footer className="py-16 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <h4 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground/10 mb-6">
            Privy
          </h4>
          <p className="font-body text-primary-foreground/50 text-sm max-w-md">
            Сообщество владельцев качественной недвижимости.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-primary-foreground/10 pt-8">
          <p className="font-body text-primary-foreground/30 text-sm mb-4 md:mb-0">
            © 2026 Privy
          </p>
          <div className="flex gap-8">
            {["Условия", "Конфиденциальность", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors"
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
