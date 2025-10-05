import { Satellite } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="h-5 w-5 text-primary" />
              <span className="font-semibold">Terra</span>
            </div>
            <p className="text-sm text-muted-foreground">
              25 years of NASA Terra satellite observations, visualized as Earth's medical chart.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://terra.nasa.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  NASA Terra Mission
                </a>
              </li>
              <li>
                <a href="https://modis.gsfc.nasa.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  MODIS Instruments
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Disclaimer</h3>
            <p className="text-sm text-muted-foreground mt-3">
              This website template was created with the assistance of Lovable AI. All information, charts, and images are sourced from publicly available internet resources.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dr. Terra. Educational visualization project.
        </div>
      </div>
    </footer>
  );
};
