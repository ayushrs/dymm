
import { memo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles, Shield, LockKeyhole } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Feature item component extracted for better reusability and memoization
const FeatureItem = memo(({ icon, color, title, description, index }: { 
  icon: JSX.Element, 
  color: string, 
  title: string, 
  description: string,
  index: number
}) => {
  const itemRef = useScrollAnimation<HTMLDivElement>('slide-left', 0.1);
  
  return (
    <div ref={itemRef} className="flex items-start gap-3">
      <div className={`mt-1 bg-${color}/10 p-2 rounded-full`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
});

// Memoized main component
export const DatingFeature = memo(() => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const descriptionRef = useScrollAnimation<HTMLParagraphElement>('slide-up', 0.1);
  const cardRef = useScrollAnimation<HTMLDivElement>('slide-right', 0.1);
  
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect <span className="dymm-text-gradient">Match</span>
          </h2>
          <p ref={descriptionRef} className="text-lg text-foreground/80 mb-6">
            DYMM isn't just about activities. Connect with people you
            meet, or explore our dating features to find someone
            special.
          </p>
          
          <div className="space-y-3">
            <FeatureItem 
              icon={<Heart className="h-5 w-5 text-dymm-pink" />}
              color="dymm-pink"
              title="Genuine Connections"
              description="Meet through shared interests and activities"
              index={0}
            />
            
            <FeatureItem 
              icon={<Users className="h-5 w-5 text-dymm-teal" />}
              color="dymm-teal"
              title="Chill Socials"
              description="Get to know people in group settings"
              index={1}
            />
            
            <FeatureItem 
              icon={<Sparkles className="h-5 w-5 text-dymm-purple" />}
              color="dymm-purple"
              title="Cupid Feature"
              description="Let friends play matchmaker and introduce you"
              index={2}
            />

            <FeatureItem 
              icon={<Shield className="h-5 w-5 text-dymm-teal" />}
              color="dymm-teal"
              title="Full Control"
              description="Easily disable dating features if you're just here for activities"
              index={3}
            />
            
            <FeatureItem 
              icon={<LockKeyhole className="h-5 w-5 text-dymm-purple" />}
              color="dymm-purple"
              title="Private Matchmaking"
              description="Cupid matches are anonymous - no one knows who suggested the match"
              index={4}
            />
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-dymm-purple/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dymm-pink/30 rounded-full blur-3xl"></div>
          
          <div ref={cardRef}>
            <Card className="relative backdrop-blur-sm border-2 border-white/20 overflow-hidden dymm-card-shadow max-w-md mx-auto rotate-3">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative inline-block mx-auto mb-2">
                    <Sparkles className="h-10 w-10 text-dymm-pink" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cupid Mode</h3>
                  <p className="text-foreground/80 text-sm">
                    Play matchmaker! Think two friends would hit it off?
                  </p>
                  <p className="mt-1 text-xs flex items-center justify-center text-foreground/70">
                    <LockKeyhole className="h-3 w-3 mr-1 text-dymm-purple" />
                    Your identity stays anonymous
                  </p>
                </div>
                
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="h-14 w-14 rounded-full bg-dymm-purple/20 flex items-center justify-center text-lg font-bold">
                    J
                  </div>
                  <div className="h-8 w-8 rounded-full bg-dymm-pink flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <div className="h-14 w-14 rounded-full bg-dymm-teal/20 flex items-center justify-center text-lg font-bold">
                    K
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-dymm-purple to-dymm-pink text-sm py-1">
                  Make a Match
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

// Set display name for debugging
DatingFeature.displayName = 'DatingFeature';
