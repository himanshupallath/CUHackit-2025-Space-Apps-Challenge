import { Link } from "react-router-dom";
import { Satellite } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Satellite className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-lg font-semibold">Dr. Terra</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            Earth's Medical Doctor
          </div>
        </div>
      </div>
    </nav>
  );
};
