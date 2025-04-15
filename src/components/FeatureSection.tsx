import { 
  Users, 
  Calendar, 
  MapPin, 
  Heart, 
  Coffee, 
  Music, 
  Sparkles,
  Utensils,
  UserRoundPlus,
  UsersRound,
  Mountain,
  Film,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";
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

export const FeatureSection = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>('pop');
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 relative overflow-hidden">
      <div className="max-w-3xl mx-auto mb-8">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4">
          <span className="dymm-text-gradient">Activities</span> for every interest and passion
        </h2>
        
        <p className="text-xl text-foreground/80 mb-6">
          Create or join <span className="font-semibold">activities</span> based on your interests, meet new people, and make meaningful connections in your area.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-10">
        <AnimatedCard index={0}>
          <div className="bg-amber-100 rounded-xl p-4 shadow-lg transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Calendar className="h-8 w-8 text-amber-800 mb-3" />
            <h3 className="text-xl font-bold text-amber-900 mb-1">Art Therapy</h3>
            <p className="text-amber-950 text-sm">Enjoy painting, pottery, and more with art buffs</p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={1}>
          <div className="bg-white rounded-xl p-5 shadow-xl transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Utensils className="h-8 w-8 text-dymm-purple mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dinner Club</h3>
            <p className="text-gray-800 text-sm mb-3">Try new restaurants with foodies</p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={2}>
          <div className="bg-pink-100 rounded-xl p-4 shadow-lg transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Heart className="h-8 w-8 text-dymm-pink mb-3" />
            <h3 className="text-xl font-bold text-pink-900 mb-1">Coffee Dates</h3>
            <p className="text-pink-950 text-sm">Connect over a cup of coffee</p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={3}>
          <div className="bg-blue-100 rounded-xl p-4 shadow-lg transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Film className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="text-xl font-bold text-blue-900 mb-1">Movie Nights</h3>
            <p className="text-blue-950 text-sm">Watch the latest films with movie buffs</p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={4}>
          <div className="bg-purple-100 rounded-xl p-4 shadow-lg transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Users className="h-8 w-8 text-dymm-purple mb-3" />
            <h3 className="text-xl font-bold text-purple-900 mb-1">Double Dates</h3>
            <p className="text-purple-950 text-sm">Bring your date and meet another couple</p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={5}>
          <div className="bg-green-100 rounded-xl p-4 shadow-lg transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Trophy className="h-8 w-8 text-green-700 mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-1">Sports Events</h3>
            <p className="text-green-950 text-sm">Bring in people to enjoy your fav sports</p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={6}>
          <div className="bg-amber-200 rounded-xl p-4 shadow-lg transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Mountain className="h-8 w-8 text-amber-800 mb-3" />
            <h3 className="text-xl font-bold text-amber-900 mb-1">Group Hikes</h3>
            <p className="text-amber-950 text-sm">Explore nature trails with fellow hikers</p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={7}>
          <div className="bg-teal-100 rounded-xl p-4 shadow-lg transform hover:-translate-y-2 transition-transform h-full duration-300">
            <Music className="h-8 w-8 text-teal-700 mb-3" />
            <h3 className="text-xl font-bold text-teal-900 mb-1">Music Jams</h3>
            <p className="text-teal-950 text-sm">Play or listen to live music sessions</p>
          </div>
        </AnimatedCard>
      </div>

      <div className="text-center mt-12 mb-6">
        <p className="text-xl md:text-2xl italic text-foreground/70 max-w-2xl mx-auto">
          Create connections through any <span className="font-semibold">activity</span> you can dream up — your social world is waiting to unfold.
        </p>
      </div>
    </div>
  );
};
