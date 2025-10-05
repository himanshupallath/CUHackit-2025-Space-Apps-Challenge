import { Card } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

interface DoctorNoteProps {
  note: string;
}

export const DoctorNote = ({ note }: DoctorNoteProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-gradient-primary shadow-glow">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary-foreground/10">
            <Stethoscope className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-primary-foreground">
              Doctor's Note
            </h3>
            <p className="text-primary-foreground/90 italic leading-relaxed">
              "{note}"
            </p>
            <div className="mt-4 text-sm text-primary-foreground/70">
              — Terra, Earth Observation Satellite
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
