import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "موقعنا",
    lines: ["جنزور، المعاقين", "طرابلس، ليبيا"],
  },
  {
    icon: Phone,
    title: "أرقام الهاتف",
    lines: ["0912124336", "0912197419"],
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    lines: ["info@damanaljawda.ly"],
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    lines: ["السبت - الخميس: 9:00 صباحاً - 8:00 مساءً", "الجمعة: مغلق"],
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">اتصل بنا</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <p className="text-muted-foreground text-lg">
            هل لديك استفسار أو تحتاج إلى عرض سعر؟ نحن هنا لخدمتك.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-medium border border-border">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الرسالة
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  required
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                إرسال الرسالة
                <Send className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
