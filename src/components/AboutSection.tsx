import { Sparkles, MessageCircle, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "منتجات عالية الجودة",
    description: "نختار منتجاتنا بعناية فائقة من أفضل المصنعين العالميين والمحليين.",
  },
  {
    icon: MessageCircle,
    title: "استشارات متخصصة",
    description: "فريقنا ذو الخبرة جاهز دائماً لمساعدتك في اختيار الأنسب لاحتياجاتك.",
  },
  {
    icon: Shield,
    title: "خدمة موثوقة",
    description: "بنينا سمعتنا على الثقة والالتزام بالمواعيد ورضا العملاء منذ 2018.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop"
                alt="منتجات التجميل"
                className="rounded-2xl shadow-medium w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-gold p-6 border border-gold/20">
                <div className="text-4xl font-heading font-bold text-gradient-gold">5+</div>
                <div className="text-sm text-muted-foreground">سنوات من التميز</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
              <span className="text-primary text-sm font-medium">من نحن</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              نكرس جهودنا للجودة والأناقة
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              تأسست شركة ضمان الجودة لاستيراد مواد التنظيف والخردوات ومواد الزينة في عام 2018، ومنذ ذلك الحين أصبحت اسماً رائداً وموثوقاً في طرابلس، ليبيا. نحن متخصصون في استيراد أجود مستحضرات التجميل والعطور والإكسسوارات النسائية ومواد العناية الشخصية.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              يقع مقرنا في جنزور، منطقة المعاقين، حيث نخدم عملاءنا من الأفراد والشركات والمؤسسات التجارية. نحن نؤمن بأن الجودة ليست مجرد كلمة، بل هي التزام نقدمه في كل منتج.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300 hover:border-primary/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
