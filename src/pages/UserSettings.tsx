import React from 'react';
import { DatingPreferences } from "@/components/DatingPreferences";
import { PageSkeleton } from "@/components/PageSkeleton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const UserSettings = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DatingPreferences />
          
          {/* Other settings sections could go here */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">About the App</h2>
            <p className="text-muted-foreground">
              DYMM is designed for both social activities and dating. Not everyone is looking for 
              dating — the app is about connecting through shared interests and fun activities!
            </p>
            <p className="text-muted-foreground">
              Use the controls to customize your experience. You can turn dating features on or off at any time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserSettings;
