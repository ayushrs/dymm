
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

const Download = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Download the <span className="dymm-text-gradient">DYMM</span> App
          </h1>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Get the full DYMM experience on your mobile device. Connect with people, join activities, and make meaningful connections on the go.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-dymm-purple/10 to-dymm-pink/10 p-8 rounded-xl border border-foreground/10">
              <Apple className="h-16 w-16 mx-auto mb-4 text-dymm-purple" />
              <h2 className="text-2xl font-bold mb-4">iOS App</h2>
              <p className="mb-6 text-foreground/80">
                Download DYMM on your iPhone or iPad and stay connected wherever you go.
              </p>
              <Button className="w-full bg-black hover:bg-black/80 text-white">
                <Apple className="mr-2 h-4 w-4" />
                App Store
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-dymm-pink/10 to-dymm-yellow/10 p-8 rounded-xl border border-foreground/10">
              <Smartphone className="h-16 w-16 mx-auto mb-4 text-dymm-pink" />
              <h2 className="text-2xl font-bold mb-4">Android App</h2>
              <p className="mb-6 text-foreground/80">
                Get DYMM on your Android device and never miss an opportunity to connect.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Smartphone className="mr-2 h-4 w-4" />
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-dymm-purple/5 to-dymm-pink/5 rounded-xl border border-foreground/10">
            <h2 className="text-2xl font-bold mb-4">App Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <li className="flex items-start p-3">
                <div className="h-6 w-6 rounded-full bg-dymm-purple/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-bold text-dymm-purple">✓</span>
                </div>
                <span>Create and join activities on the go</span>
              </li>
              <li className="flex items-start p-3">
                <div className="h-6 w-6 rounded-full bg-dymm-purple/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-bold text-dymm-purple">✓</span>
                </div>
                <span>Real-time messaging with activity participants</span>
              </li>
              <li className="flex items-start p-3">
                <div className="h-6 w-6 rounded-full bg-dymm-purple/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-bold text-dymm-purple">✓</span>
                </div>
                <span>Location-based activity recommendations</span>
              </li>
              <li className="flex items-start p-3">
                <div className="h-6 w-6 rounded-full bg-dymm-purple/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-bold text-dymm-purple">✓</span>
                </div>
                <span>Push notifications for activity updates</span>
              </li>
              <li className="flex items-start p-3">
                <div className="h-6 w-6 rounded-full bg-dymm-purple/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-bold text-dymm-purple">✓</span>
                </div>
                <span>Personalized activity feed</span>
              </li>
              <li className="flex items-start p-3">
                <div className="h-6 w-6 rounded-full bg-dymm-purple/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-bold text-dymm-purple">✓</span>
                </div>
                <span>Enhanced profile management</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Download;
