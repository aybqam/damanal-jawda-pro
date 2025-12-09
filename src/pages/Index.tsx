import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MissionSection } from "@/components/MissionSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <MissionSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
