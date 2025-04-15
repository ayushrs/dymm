
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Shield, LockKeyhole } from "lucide-react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface DatingPreferencesProps {
  className?: string;
}

export const DatingPreferences = ({ className }: DatingPreferencesProps) => {
  // In a real app, these would be fetched from the user's profile/settings
  const [showInDating, setShowInDating] = useState(true);
  const [allowCupid, setAllowCupid] = useState(true);
  
  const cardRef = useScrollAnimation<HTMLDivElement>('slide-up', 0.1);

  const handleDatingVisibilityChange = (checked: boolean) => {
    setShowInDating(checked);
    toast(checked ? "Your profile is now visible in dating" : "Your profile has been hidden from dating");
  };

  const handleCupidChange = (checked: boolean) => {
    setAllowCupid(checked);
    toast(
      checked 
        ? "Friends can now suggest matches for you" 
        : "Cupid feature disabled - friends cannot suggest matches for you"
    );
  };

  const handleSaveChanges = () => {
    // In a real app, this would save to a backend
    toast.success("Preferences saved successfully!");
  };

  return (
    <div ref={cardRef}>
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-dymm-purple" />
            Dating & Privacy Preferences
          </CardTitle>
          <CardDescription>
            Control how you appear in DYMM's dating features and who can match you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dating-visibility" className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-dymm-pink" />
                Show me in Dating
              </Label>
              <p className="text-sm text-muted-foreground">
                Turn this off to hide your profile from the dating section
              </p>
            </div>
            <Switch 
              id="dating-visibility"
              checked={showInDating}
              onCheckedChange={handleDatingVisibilityChange}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="cupid-allow" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-dymm-teal" />
                Allow Cupid Matches
              </Label>
              <p className="text-sm text-muted-foreground">
                Let friends suggest potential matches for you
              </p>
            </div>
            <Switch 
              id="cupid-allow"
              checked={allowCupid}
              onCheckedChange={handleCupidChange}
            />
          </div>
          
          <div className="mt-4 p-3 bg-muted/40 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-foreground">
              <LockKeyhole className="h-4 w-4 text-dymm-purple" />
              <span className="font-medium">Privacy Guarantee</span>
            </div>
            <p className="text-sm text-muted-foreground">
              When someone acts as Cupid to match two friends, their identity remains completely anonymous. 
              Neither person will know who suggested the match.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveChanges} className="w-full">
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
