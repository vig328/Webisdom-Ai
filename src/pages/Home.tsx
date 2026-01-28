import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AIAuditSection from "@/components/sections/AIAuditSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <IndustriesSection />
        <AIAuditSection />
        <NewsletterSection />
        <FeaturesSection />
        <ProcessSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;