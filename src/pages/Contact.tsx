
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dymm-text-gradient">Get in Touch</h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions about DYMM, 
              need support, or want to share your feedback, our team is here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <Card className="h-full bg-gradient-to-br from-dymm-purple/10 to-dymm-teal/5 border-foreground/10 overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                        <MessageCircle className="h-6 w-6 text-dymm-purple mr-3" />
                        Contact Information
                      </h2>
                      <p className="text-foreground mb-6">
                        Have questions or feedback? We're here to help! Reach out to us using the information below.
                      </p>
                    </div>
                    
                    <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-dymm-purple/20">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-dymm-purple/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-dymm-purple" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium mb-1 text-foreground">Email Us</h3>
                          <p className="text-foreground">support@dymm.app</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:block mt-8">
                      <div className="relative">
                        <div className="absolute -right-4 -top-4 w-32 h-32 bg-dymm-pink/10 rounded-full blur-3xl"></div>
                        <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-dymm-teal/10 rounded-full blur-3xl"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-7">
              <Card className="bg-gradient-to-br from-background to-dymm-light-purple/5 border border-foreground/10 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                    <Send className="h-5 w-5 text-dymm-purple" />
                  </div>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
