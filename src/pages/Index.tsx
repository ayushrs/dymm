
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { DatingFeature } from "@/components/DatingFeature";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { InstagramFeed } from "@/components/InstagramFeed";
import { SectionTitle } from "@/components/SectionTitle";
import { Instagram } from "lucide-react";
import { DoodleBackground } from "@/components/DoodleBackground";
import { HowDymmWorks } from "@/components/HowDymmWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <div className="relative">
          <DoodleBackground section="hero" />
          <HeroSection />
        </div>
        
        <div className="relative">
          {/* Section 2: Activities for every interest and passion */}
          <section id="activities" className="min-h-screen flex items-center justify-center relative overflow-hidden py-6 md:py-10">
            <div className="bg-gradient-to-b from-background via-background/95 to-background/80 absolute inset-0 rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"></div>
            <DoodleBackground section="activities" />
            <div className="relative z-10">
              <FeatureSection />
            </div>
          </section>
          
          {/* How DYMM Works section - moved from FeatureSection to here */}
          <section id="how-dymm-works" className="flex items-center justify-center relative overflow-hidden py-6 md:py-10">
            <div className="bg-gradient-to-br from-background/90 to-background/85 absolute inset-0 rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"></div>
            <DoodleBackground section="activities" />
            <div className="relative z-10">
              <HowDymmWorks />
            </div>
          </section>
          
          {/* Section 3: Find Your Perfect Match */}
          <section id="dating" className="min-h-screen flex items-center justify-center relative overflow-hidden py-6 md:py-10">
            <div className="bg-gradient-to-br from-background/95 to-background/90 absolute inset-0 rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"></div>
            <DoodleBackground section="dating" />
            <div className="relative z-10">
              <DatingFeature />
            </div>
          </section>
          
          {/* Section 4: Follow our journey */}
          <section id="instagram" className="flex items-center justify-center relative overflow-hidden py-6 md:py-10">
            <div className="bg-gradient-to-b from-background/95 to-background/90 absolute inset-0 rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"></div>
            <DoodleBackground section="instagram" />
            <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
              <SectionTitle 
                icon={<Instagram className="h-7 w-7 text-dymm-purple" />}
                title="Follow our journey"
                description="See how DYMM is growing and connecting people across the globe"
              />
              <InstagramFeed />
            </div>
          </section>
          
          {/* Section 5: Ready to Join Activities */}
          <section id="join" className="flex items-center justify-center relative overflow-hidden py-6 md:py-10">
            <div className="bg-gradient-to-br from-background/90 to-background/85 absolute inset-0 rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"></div>
            <DoodleBackground section="join" />
            <div className="relative z-10">
              <CallToAction />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
