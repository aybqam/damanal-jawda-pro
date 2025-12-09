import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">ض</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">ضمان الجودة</h3>
                <p className="text-xs text-primary-foreground/60">منذ 2018</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              شريكك الأول لأرقى مستحضرات التجميل والعطور والإكسسوارات النسائية ومواد العناية الشخصية في طرابلس.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {["الرئيسية", "من نحن", "خدماتنا", "معرض الأعمال", "اتصل بنا"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "مستحضرات التجميل",
                "العطور الفاخرة",
                "الإكسسوارات النسائية",
                "العناية الشخصية",
                "التوريد بالجملة",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">جنزور، المعاقين، طرابلس</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">0912124336</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">info@damanaljawda.ly</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors group"
                >
                  <Icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-charcoal transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} ضمان الجودة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
