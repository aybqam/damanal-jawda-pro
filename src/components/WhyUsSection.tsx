import { Award, Banknote, Truck, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "جودة لا تضاهى",
    description: "نلتزم بأعلى معايير الجودة في كل منتج وخدمة نقدمها.",
  },
  {
    icon: Banknote,
    title: "أسعار تنافسية",
    description: "نقدم أفضل قيمة مقابل السعر في السوق الليبي.",
  },
  {
    icon: Truck,
    title: "سرعة في التوصيل",
    description: "خدمة توصيل سريعة وموثوقة لجميع مناطق طرابلس.",
  },
  {
    icon: HeadphonesIcon,
    title: "دعم فني متميز",
    description: "فريق خدمة عملاء جاهز للرد على استفساراتكم على مدار الساعة.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">لماذا نحن</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            لماذا تختار ضمان الجودة؟
          </h2>
          <p className="text-muted-foreground text-lg">
            نحن نقدم خدمات استثنائية وجودة لا مثيل لها
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover-lift overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative font-heading text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="relative text-muted-foreground">
                {reason.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
