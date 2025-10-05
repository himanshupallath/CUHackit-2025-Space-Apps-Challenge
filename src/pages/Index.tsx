import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroVideo } from "@/components/HeroVideo";
import { PlansGrid } from "@/components/PlansGrid";
import { plans } from "@/data/plans";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <HeroVideo 
          title="Dr. Terra — Diagnosing a Fevered Planet"
          subtitle="Dr. Terra has watched Earth breathe for 25 years. This is her medical chart."
          driveLink="https://drive.google.com/file/d/1cDJ68JQUuQGRhbBohTMe-QfR6sR9qP3s/preview"
        />
        
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#028E41]">Treatment Plans</h2>
          <PlansGrid plans={plans} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
