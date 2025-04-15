
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold dymm-text-gradient">DYMM</span>
            <span className="text-xs bg-dymm-yellow px-2 py-0.5 rounded-full text-dymm-purple font-medium">Beta</span>
          </Link>
          <ThemeToggle />
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/about" className="text-sm font-medium hover:text-dymm-purple">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-dymm-purple">
            Contact
          </Link>
          <Link to="/download">
            <Button size="sm" className="bg-dymm-purple hover:bg-dymm-purple/90">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
