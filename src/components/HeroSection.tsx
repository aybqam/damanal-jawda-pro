import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Package, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cosmetics.jpg";

const stats = [
  { icon: Award, value: "6+", label: "سنوات خبرة" },
  { icon: Users, value: "500+", label: "عميل سعيد" },
  { icon: Package, value: "1000+", label: "منتج متنوع" },
  { icon: CheckCircle, value: "100%", label: "التزام بالجودة" },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="مستحضرات التجميل الفاخرة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl mr-0 ml-auto text-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">شريكك الموثوق منذ 2018</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
            الجودة التي تستحق
            <span className="block text-gradient-gold">الثقة</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-up stagger-2">
            شريكك الأول لأرقى مستحضرات التجميل والعطور والإكسسوارات النسائية ومواد العناية الشخصية في طرابلس. نحن نجمع بين الجودة والأناقة لنقدم لك أفضل المنتجات.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up stagger-3">
            <Button variant="hero" size="lg">
              تواصل معنا الآن
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              استكشف خدماتنا
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up stagger-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10"
              >
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
