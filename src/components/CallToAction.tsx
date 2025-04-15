
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CallToAction = () => {
  // Google Form URL - Replace this with your actual Google Form URL
  const googleFormUrl = "https://forms.gle/YourGoogleFormLink";
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  
  return (
    <div className="container mx-auto px-4 py-10 md:py-16 relative z-20">
      <div className="max-w-4xl mx-auto text-center bg-background/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-[0_10px_50px_rgba(138,43,226,0.2)] transition-all duration-500">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Join <span className="dymm-text-gradient">Activities</span>?
        </h2>
        <p className="text-lg text-foreground/80 mb-4 max-w-2xl mx-auto">
          Join DYMM today and start creating or joining activities with people who share your interests.
        </p>
        
        <div className="mb-8">
          <p className="text-xl font-bold dymm-text-gradient">Coming Soon</p>
          <p className="text-base text-foreground/70 mt-2 mb-6">
            Join our waitlist to be notified when we launch our activities platform!
          </p>
          
          <div className="max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
            <Button
              className="w-full h-12 bg-gradient-to-r from-dymm-purple to-dymm-pink hover:opacity-90 text-white font-semibold text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(googleFormUrl, "_blank")}
            >
              Join Waitlist
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-foreground/60">
          Find your community through activities you love.
        </p>
      </div>
    </div>
  );
};
