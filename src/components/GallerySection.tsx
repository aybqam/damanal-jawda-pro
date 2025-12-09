import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop",
    alt: "عطور فاخرة",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop",
    alt: "مستحضرات التجميل",
  },
  {
    src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop",
    alt: "إكسسوارات نسائية",
  },
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop",
    alt: "منتجات العناية بالبشرة",
  },
  {
    src: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2000&auto=format&fit=crop",
    alt: "مستحضرات المكياج",
  },
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop",
    alt: "مجوهرات وإكسسوارات",
  },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">معرض الأعمال</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            لمحات من منتجاتنا ومشاريعنا
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  عرض الصورة
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="عرض مكبر"
            className="max-w-full max-h-[90vh] object-contain rounded-xl animate-scale-in"
          />
          <button
            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors flex items-center justify-center text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};
