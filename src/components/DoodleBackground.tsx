
import React from 'react';
import { Coffee, Mountain, Flower, Car, Bike, Dumbbell, Music, Star, Sun, Cloud, Heart, Book, Utensils, Plane, Umbrella, Camera, Gamepad, Palette, Gift, Trees, Map, Sparkles, Pizza, Popcorn } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface DoodleProps {
  section: 'hero' | 'activities' | 'dating' | 'instagram' | 'join';
}

export const DoodleBackground: React.FC<DoodleProps> = ({ section }) => {
  const doodleRef = useScrollAnimation<HTMLDivElement>('slide-up', 0.1);
  
  // Different doodle positions based on the section
  const getDoodleConfig = () => {
    switch (section) {
      case 'hero':
        return {
          icons: [
            { Icon: Coffee, size: 24, top: '15%', left: '10%', rotate: '15deg', delay: '0s' },
            { Icon: Mountain, size: 32, top: '40%', right: '15%', rotate: '-10deg', delay: '0.2s' },
            { Icon: Flower, size: 28, bottom: '20%', left: '20%', rotate: '5deg', delay: '0.4s' },
            { Icon: Star, size: 22, top: '25%', left: '30%', rotate: '8deg', delay: '0.6s' },
            { Icon: Sun, size: 26, bottom: '35%', right: '25%', rotate: '-5deg', delay: '0.3s' },
            { Icon: Camera, size: 24, top: '60%', left: '15%', rotate: '12deg', delay: '0.7s' },
            { Icon: Palette, size: 28, top: '10%', right: '40%', rotate: '-7deg', delay: '0.5s' },
            { Icon: Gift, size: 20, bottom: '15%', right: '15%', rotate: '20deg', delay: '0.4s' },
            { Icon: Pizza, size: 24, top: '70%', right: '30%', rotate: '-15deg', delay: '0.2s' }
          ],
          color: 'text-dymm-purple/30'
        };
      case 'activities':
        return {
          icons: [
            { Icon: Dumbbell, size: 28, top: '20%', left: '8%', rotate: '-5deg', delay: '0.3s' },
            { Icon: Mountain, size: 32, bottom: '30%', right: '10%', rotate: '8deg', delay: '0.1s' },
            { Icon: Bike, size: 30, top: '40%', right: '20%', rotate: '-12deg', delay: '0.5s' },
            { Icon: Music, size: 24, bottom: '15%', left: '15%', rotate: '20deg', delay: '0.7s' },
            { Icon: Plane, size: 28, top: '10%', right: '35%', rotate: '-8deg', delay: '0.4s' },
            { Icon: Gamepad, size: 26, top: '60%', left: '25%', rotate: '15deg', delay: '0.2s' },
            { Icon: Camera, size: 24, bottom: '40%', left: '30%', rotate: '-10deg', delay: '0.6s' },
            { Icon: Trees, size: 30, top: '25%', left: '40%', rotate: '5deg', delay: '0.3s' },
            { Icon: Map, size: 26, bottom: '20%', right: '30%', rotate: '-15deg', delay: '0.5s' },
            { Icon: Star, size: 22, top: '15%', left: '20%', rotate: '10deg', delay: '0.4s' }
          ],
          color: 'text-dymm-teal/30'
        };
      case 'dating':
        return {
          icons: [
            { Icon: Coffee, size: 26, top: '15%', right: '12%', rotate: '10deg', delay: '0.2s' },
            { Icon: Car, size: 36, bottom: '25%', left: '15%', rotate: '-8deg', delay: '0.4s' },
            { Icon: Flower, size: 24, top: '45%', left: '12%', rotate: '20deg', delay: '0s' },
            { Icon: Heart, size: 22, top: '30%', right: '28%', rotate: '-15deg', delay: '0.6s' },
            { Icon: Umbrella, size: 30, bottom: '40%', right: '18%', rotate: '12deg', delay: '0.3s' },
            { Icon: Book, size: 26, top: '55%', left: '30%', rotate: '-6deg', delay: '0.8s' },
            { Icon: Music, size: 22, bottom: '10%', right: '35%', rotate: '15deg', delay: '0.5s' },
            { Icon: Star, size: 20, top: '20%', left: '25%', rotate: '-12deg', delay: '0.2s' },
            { Icon: Sun, size: 24, bottom: '30%', right: '40%', rotate: '8deg', delay: '0.7s' },
            { Icon: Gift, size: 28, top: '65%', right: '15%', rotate: '-10deg', delay: '0.4s' },
            { Icon: Camera, size: 22, bottom: '50%', left: '20%', rotate: '12deg', delay: '0.3s' }
          ],
          color: 'text-dymm-pink/30'
        };
      case 'instagram':
        return {
          icons: [
            { Icon: Music, size: 30, top: '20%', right: '15%', rotate: '-15deg', delay: '0.1s' },
            { Icon: Car, size: 28, bottom: '20%', right: '20%', rotate: '5deg', delay: '0.3s' },
            { Icon: Coffee, size: 24, top: '30%', left: '10%', rotate: '12deg', delay: '0.5s' },
            { Icon: Star, size: 20, bottom: '45%', left: '25%', rotate: '-8deg', delay: '0.2s' },
            { Icon: Cloud, size: 32, top: '15%', left: '35%', rotate: '6deg', delay: '0.7s' },
            { Icon: Utensils, size: 26, bottom: '35%', right: '30%', rotate: '-3deg', delay: '0.4s' },
            { Icon: Camera, size: 28, top: '50%', right: '10%', rotate: '10deg', delay: '0.6s' },
            { Icon: Heart, size: 22, bottom: '15%', left: '40%', rotate: '-12deg', delay: '0.3s' },
            { Icon: Sparkles, size: 24, top: '10%', right: '40%', rotate: '8deg', delay: '0.5s' },
            { Icon: Popcorn, size: 26, bottom: '25%', left: '10%', rotate: '-5deg', delay: '0.4s' },
            { Icon: Palette, size: 20, top: '40%', right: '25%', rotate: '15deg', delay: '0.2s' }
          ],
          color: 'text-dymm-purple/30'
        };
      case 'join':
        return {
          icons: [
            { Icon: Mountain, size: 34, top: '15%', left: '18%', rotate: '-10deg', delay: '0.2s' },
            { Icon: Bike, size: 26, bottom: '30%', right: '12%', rotate: '15deg', delay: '0s' },
            { Icon: Dumbbell, size: 28, top: '35%', right: '15%', rotate: '-5deg', delay: '0.4s' },
            { Icon: Heart, size: 22, bottom: '20%', left: '10%', rotate: '10deg', delay: '0.6s' },
            { Icon: Sun, size: 30, top: '25%', left: '40%', rotate: '-12deg', delay: '0.3s' },
            { Icon: Flower, size: 24, bottom: '45%', right: '35%', rotate: '8deg', delay: '0.5s' },
            { Icon: Coffee, size: 20, top: '50%', left: '25%', rotate: '-7deg', delay: '0.7s' },
            { Icon: Plane, size: 26, bottom: '15%', right: '25%', rotate: '12deg', delay: '0.4s' },
            { Icon: Music, size: 28, top: '20%', right: '40%', rotate: '-15deg', delay: '0.2s' },
            { Icon: Camera, size: 22, bottom: '40%', left: '35%', rotate: '5deg', delay: '0.6s' },
            { Icon: Star, size: 24, top: '60%', right: '20%', rotate: '-8deg', delay: '0.3s' },
            { Icon: Book, size: 20, bottom: '25%', left: '30%', rotate: '15deg', delay: '0.5s' }
          ],
          color: 'text-dymm-teal/30'
        };
      default:
        return {
          icons: [],
          color: 'text-dymm-purple/30'
        };
    }
  };

  const { icons, color } = getDoodleConfig();

  return (
    <div ref={doodleRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, index) => {
        const { Icon, size, top, left, right, bottom, rotate, delay } = item;
        
        return (
          <div 
            key={index}
            className={`absolute ${color} animate-float`}
            style={{ 
              top, 
              left, 
              right, 
              bottom, 
              transform: `rotate(${rotate})`,
              animation: `float 6s ease-in-out infinite ${delay}`,
              opacity: 0.7
            }}
          >
            <Icon size={size} strokeWidth={1.5} />
          </div>
        );
      })}
    </div>
  );
};
