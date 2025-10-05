import { PlanCard } from "./PlanCard";
import type { Plan } from "@/data/plans";

interface PlansGridProps {
  plans: Plan[];
}

export const PlansGrid = ({ plans }: PlansGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <PlanCard key={plan.id} plan={plan} index={index} />
      ))}
    </div>
  );
};
