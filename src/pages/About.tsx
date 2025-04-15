
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 dymm-text-gradient">About DYMM</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-foreground mb-6">
              At DYMM, we're reimagining how people connect in the digital age. Our platform brings together 
              the best elements of social activities, dating, and matchmaking to create a holistic approach 
              to building meaningful relationships.
            </p>
            
            <p className="text-lg text-foreground mb-6">
              What you can do is only limited by your imagination — your social world is waiting to unfold with DYMM.
            </p>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
          <Card className="mb-12 border-dymm-purple/20">
            <CardContent className="pt-6">
              <p className="text-lg text-foreground">
                To empower people to form genuine connections through shared experiences, 
                whether that's finding romance, making friends, or building community.
              </p>
            </CardContent>
          </Card>
          
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-dymm-purple/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-dymm-purple">Authenticity</h3>
                <p className="text-foreground">We encourage real connections based on genuine shared interests and values.</p>
              </CardContent>
            </Card>
            
            <Card className="border-dymm-purple/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-dymm-purple">Inclusivity</h3>
                <p className="text-foreground">We're building a platform where everyone can find their community.</p>
              </CardContent>
            </Card>
            
            <Card className="border-dymm-purple/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-dymm-purple">Innovation</h3>
                <p className="text-foreground">We're constantly exploring new ways to bring people together meaningfully.</p>
              </CardContent>
            </Card>
            
            <Card className="border-dymm-purple/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-dymm-purple">Privacy</h3>
                <p className="text-foreground">We respect your data and prioritize creating a safe environment for all users.</p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
          <div className="mb-12">
            <p className="text-lg text-foreground mb-6">
              DYMM began with a simple observation: in a world more connected than ever, people were still 
              struggling to form meaningful relationships. Dating apps focused solely on romance, social 
              platforms lacked intentionality, and finding new communities felt overwhelming.
            </p>
            <p className="text-lg text-foreground">
              We built DYMM to bridge these gaps, creating a space where connections can grow organically 
              through shared activities, dating intentions, or with the help of our innovative Cupid feature. 
              Today, we're proud to be helping people worldwide discover new connections that truly matter.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
