
import React from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionTitleProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export const SectionTitle = ({
  icon,
  title,
  description,
  className,
}: SectionTitleProps) => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>('pop');
  
  return (
    <div className={cn("text-center mb-10", className)}>
      <h2 ref={titleRef} className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
        {icon}
        <span className="dymm-text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
