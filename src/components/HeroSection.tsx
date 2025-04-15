
import { ArrowDownCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const HeroSection = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  
  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden w-full z-10 py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80"></div>
      <div className="max-w-3xl mx-auto text-center z-10 px-4">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="dymm-text-gradient inline-block">Did You Meet Me?</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-6">
          Create and join <span className="font-semibold">activities</span> that match your interests, connect with like-minded people, and make genuine connections IRL.
        </p>
        
        <div className="mt-12 cursor-pointer">
          <ArrowDownCircle 
            className="mx-auto h-10 w-10 text-dymm-teal opacity-80 hover:opacity-100 transition-opacity" 
            onClick={() => document.getElementById('activities')?.scrollIntoView({behavior: 'smooth'})}
          />
        </div>
      </div>
    </section>
  );
};
