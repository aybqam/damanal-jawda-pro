import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop",
    title: "مستحضرات التجميل والعطور",
    description: "تشكيلة واسعة من أرقى مستحضرات التجميل والعطور العالمية. من أحمر الشفاه إلى كريمات العناية بالبشرة، نوفر لك كل ما تحتاجينه للتألق والجمال.",
  },
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop",
    title: "الخردوات والإكسسوارات النسائية",
    description: "مجموعة متنوعة من الإكسسوارات النسائية الراقية من مجوهرات وأربطة شعر وحقائب وغيرها. كل ما تحتاجينه لإكمال إطلالتك بأناقة.",
  },
  {
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop",
    title: "مواد العناية الشخصية",
    description: "منتجات عناية شخصية عالية الجودة من شامبو وبلسم ومستحضرات العناية بالبشرة والجسم، لتعتني بنفسك بأفضل المنتجات.",
  },
  {
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop",
    title: "التوريد بالجملة",
    description: "حلول توريد موثوقة للمحلات والشركات التي تتطلب كميات كبيرة وتوريداً مستمراً. نحن شريكك الاستراتيجي للنجاح.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">خدماتنا</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ماذا نقدم لعملائنا
          </h2>
          <p className="text-muted-foreground text-lg">
            حلول شاملة لاحتياجات الجمال والأناقة والعناية الشخصية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-16 z-10">
                <div className="bg-card rounded-xl p-6 shadow-medium border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary group-hover:text-gold transition-colors">
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
