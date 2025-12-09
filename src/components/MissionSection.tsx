import { Target, Eye } from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-foreground/10 rounded-full mb-4">
            <span className="text-primary-foreground text-sm font-medium">رسالتنا ورؤيتنا</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            نطمح للتميز والريادة
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-gold/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">رسالتنا</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              تقديم أجود مستحضرات التجميل والعطور والإكسسوارات النسائية ومواد العناية الشخصية، مع الالتزام بأعلى معايير الجودة والمصداقية، لتلبية تطلعات عملائنا.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-gold/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">رؤيتنا</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              أن نكون الشركة الرائدة والمرجع الأول في ليبيا في مجال استيراد مستحضرات التجميل والخردوات ومواد العناية الشخصية، من خلال بناء علاقات مستدامة مع عملائنا.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
