import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Status = "idle" | "loading" | "success" | "error";

const PROPERTY_TYPES = ["Квартира", "Дом", "Апартаменты", "Таунхаус"];

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const reset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setPropertyType("");
    setStatus("idle");
  };

  const handleOpenChange = (value: boolean) => {
    if (!value) reset();
    onOpenChange(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, city, propertyType }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            Подходит ли мой дом?
          </DialogTitle>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-8 text-center space-y-3">
            <p className="font-heading text-lg font-semibold">Заявка отправлена!</p>
            <p className="font-body text-sm text-muted-foreground">
              Мы свяжемся с вами в ближайшее время.
            </p>
            <Button className="mt-2" onClick={() => handleOpenChange(false)}>
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="cf-name">Имя</Label>
              <Input
                id="cf-name"
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="cf-phone">Телефон</Label>
              <Input
                id="cf-phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="cf-email">Email</Label>
              <Input
                id="cf-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="cf-city">Город</Label>
              <Input
                id="cf-city"
                type="text"
                placeholder="Москва"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label>Тип недвижимости</Label>
              <Select value={propertyType} onValueChange={setPropertyType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Ошибка отправки. Попробуйте ещё раз.
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={status === "loading" || !propertyType}
            >
              {status === "loading" ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
