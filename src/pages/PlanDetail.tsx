import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChartBlock } from "@/components/ChartBlock";
import { ImageGallery } from "@/components/ImageGallery";
import { DoctorNote } from "@/components/DoctorNote";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { plans } from "@/data/plans";
import { ExternalLink, ArrowLeft } from "lucide-react";
import heatHero from "@/assets/heat_hero.jpg";
import coHero from "@/assets/co_hero.jpg";
import scarsHero from "@/assets/scars_hero.jpg";

const categoryColors = {
  Heat: "bg-destructive/20 text-destructive border-destructive/30",
  Air: "bg-chart-2/20 text-chart-2 border-chart-2/30",
  Land: "bg-chart-4/20 text-chart-4 border-chart-4/30",
};

const imageMap: Record<string, string> = {
  "/heat_hero": heatHero,
  "/co_hero": coHero,
  "/scars_hero": scarsHero,
};

const PlanDetail = () => {
  const { slug } = useParams();
  const plan = plans.find(p => p.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!plan) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Header */}
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={imageMap[plan.heroImage]}
              alt={plan.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
          {/* Return to Home Button */}
          <div className="absolute top-6 left-0 w-full z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Link to="/">
                <Button variant="outline" className="group bg-background/80 backdrop-blur-sm hover:bg-background/90">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Badge className={`${categoryColors[plan.category]} mb-4`} variant="outline">
                {plan.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {plan.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                {plan.vitals.map((vital, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-border">
                    <div className="text-xs text-muted-foreground">{vital.label}</div>
                    <div className="text-sm font-semibold text-primary">{vital.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 inline-block bg-primary/20 border border-primary rounded-xl px-6 py-3">
                <div className="text-xs text-muted-foreground mb-1">Key Stat</div>
                <div className="text-lg font-bold text-primary">{plan.keyStat}</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Two Column Layout: Symptoms + Diagnosis | Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left: Symptoms & Diagnosis */}
            <div className="space-y-8">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-primary">Patient Symptoms</h2>
                <Card className="p-6 bg-card shadow-card">
                  <ul className="space-y-3">
                    {plan.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground/90">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-primary">Diagnosis</h2>
                <Card className="p-6 bg-card shadow-card">
                  <p className="text-foreground/90 leading-relaxed">{plan.diagnosis}</p>
                </Card>
              </motion.section>
            </div>

            {/* Right: Charts */}
            <div className="space-y-8">
              {plan.charts.map((chart, idx) => (
                <motion.div
                  key={chart.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ChartBlock chart={chart} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Treatment Plan */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Treatment Plan (Prescriptions)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plan.prescriptions.map((rx, idx) => (
                <Card key={idx} className="p-6 bg-card shadow-card hover:shadow-glow transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{rx.label}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">{rx.detail}</p>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Expected Outcomes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Expected Outcomes</h2>
            <Card className="p-6 bg-card shadow-card">
              <ul className="space-y-3">
                {plan.expectedOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-foreground/90">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.section>

          {/* Image Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Visual Evidence</h2>
            <ImageGallery images={plan.gallery} />
          </motion.section>

          {/* Doctor's Note */}
          <DoctorNote note={plan.doctorsNote} />

          {/* Datasets & Methods */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Datasets & Methods</h2>
            <div className="space-y-4">
              {plan.datasets.map((dataset, idx) => (
                <Card key={idx} className="p-6 bg-card shadow-card">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold">{dataset.name}</h3>
                    {dataset.link && (
                      <a 
                        href={dataset.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-foreground/80 text-sm mb-2">{dataset.description}</p>
                  {dataset.caveats && (
                    <p className="text-xs text-muted-foreground italic">Note: {dataset.caveats}</p>
                  )}
                </Card>
              ))}
            </div>
          </motion.section>

          {/* References */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">References</h2>
            <Card className="p-6 bg-card shadow-card">
              <ul className="space-y-2">
                {plan.references.map((ref, idx) => (
                  <li key={idx}>
                    {ref.link ? (
                      <a 
                        href={ref.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-2"
                      >
                        {ref.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-foreground/80">{ref.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlanDetail;
