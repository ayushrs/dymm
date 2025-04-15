
import { Sparkles, Calendar, Users, Heart, Coffee, UsersRound } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Card component with animation
const AnimatedCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
  // Alternate between slide-left and slide-right based on index
  const animationType = index % 2 === 0 ? 'slide-left' : 'slide-right';
  const cardRef = useScrollAnimation<HTMLDivElement>(animationType, 0.1);
  
  return (
    <div ref={cardRef}>
      {children}
    </div>
  );
};

export const HowDymmWorks = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10 relative overflow-hidden">
      <div className="mb-8">
        <SectionTitle 
          icon={<Sparkles className="h-7 w-7 text-dymm-purple" />}
          title="How DYMM Works"
          description="Join or host activities you love and find meaningful relationships with like-minded people"
        />
      </div>

      <div className="hidden lg:flex flex-row justify-between gap-4 w-full">
        <AnimatedCard index={0}>
          <div className="dymm-card-shadow overflow-hidden border-2 border-dymm-purple/20 rounded-xl p-6 bg-white/80 backdrop-blur-sm flex-1 transform hover:-translate-y-2 transition-transform duration-300">
            <Calendar className="h-12 w-12 text-dymm-purple mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Host Activities</h3>
            <p className="text-gray-800 mb-4">
              Create and host <span className="font-semibold">activities</span> based on your interests, from coffee chats to sports games.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-800 mb-2">
              <Users className="h-4 w-4" />
              <span>Up to 9 attendees</span>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard index={1}>
          <div className="dymm-card-shadow overflow-hidden border-2 border-dymm-teal/20 rounded-xl p-6 bg-white/80 backdrop-blur-sm flex-1 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-dymm-light-purple h-12 w-12 rounded-full flex items-center justify-center mb-4">
              <UsersRound className="h-7 w-7 text-dymm-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Meet People</h3>
            <p className="text-gray-800 mb-4">
              Join <span className="font-semibold">activities</span> that match your interests and connect with like-minded people.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-800 mb-2">
              <Users className="h-4 w-4" />
              <span>Find your community</span>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard index={2}>
          <div className="dymm-card-shadow overflow-hidden border-2 border-dymm-pink/20 rounded-xl p-6 bg-white/80 backdrop-blur-sm flex-1 transform hover:-translate-y-2 transition-transform duration-300">
            <Heart className="h-12 w-12 text-dymm-pink mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Dating</h3>
            <p className="text-gray-800 mb-4">
              Connect beyond <span className="font-semibold">activities</span>. Our dating features help you find meaningful relationships.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-800 mb-2">
              <Coffee className="h-4 w-4" />
              <span>Coffee dates</span>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard index={3}>
          <div className="dymm-card-shadow overflow-hidden border-2 border-dymm-teal/20 rounded-xl p-6 bg-white/80 backdrop-blur-sm flex-1 transform hover:-translate-y-2 transition-transform duration-300">
            <Sparkles className="h-12 w-12 text-dymm-teal mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Cupid</h3>
            <p className="text-gray-800 mb-4">
              Play matchmaker! Connect your friends through shared <span className="font-semibold">activities</span>.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-800 mb-2">
              <Heart className="h-4 w-4" />
              <span>Create connections</span>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};
