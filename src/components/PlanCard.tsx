import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Plan } from "@/data/plans";
import heatHero from "@/assets/heat_hero.jpg";
import coHero from "@/assets/co_hero.jpg";
import scarsHero from "@/assets/scars_hero.jpg";

interface PlanCardProps {
  plan: Plan;
  index: number;
}

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

export const PlanCard = ({ plan, index }: PlanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden bg-card hover:shadow-glow transition-all duration-300 group h-full flex flex-col">
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <img 
            src={imageMap[plan.heroImage]} 
            alt={plan.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
        
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
              {plan.title}
            </h3>
            <Badge className={categoryColors[plan.category]} variant="outline">
              {plan.category}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4 flex-1">
            "{plan.summary}"
          </p>
          
          <div className="pt-2 pb-1">
            <div className="text-xs text-muted-foreground mb-1">Key Stat</div>
            <div className="text-lg font-semibold text-primary">{plan.keyStat}</div>
          </div>
          
          <Link to={`/plans/${plan.slug}`} className="block">
            <Button className="w-full group/btn">
              Read Treatment Plan
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};
