
import { useEffect, useRef } from 'react';

type AnimationType = 'pop' | 'slide-left' | 'slide-right' | 'slide-up';

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  animationType: AnimationType = 'pop', 
  threshold: number = 0.1
) {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the appropriate animation class based on the animation type
            if (animationType === 'pop') {
              entry.target.classList.add('animate-pop');
            } else if (animationType === 'slide-left') {
              entry.target.classList.add('animate-slide-left');
            } else if (animationType === 'slide-right') {
              entry.target.classList.add('animate-slide-right');
            } else if (animationType === 'slide-up') {
              entry.target.classList.add('animate-slide-up');
            }
            
            // Once the animation is triggered, we can unobserve the element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // using the viewport
        rootMargin: '0px',
        threshold: threshold, // trigger when element is visible by the specified threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationType, threshold]);

  return ref;
}
