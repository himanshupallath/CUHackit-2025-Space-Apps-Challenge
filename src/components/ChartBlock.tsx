import { Card } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import type { Plan } from "@/data/plans";
import { plans } from "@/data/plans";
import tempTimelapse from "@/assets/world_temperature_timelapse.mp4";
import cmMap from "@/assets/CM_map.mp4";

interface ChartBlockProps {
  chart: Plan["charts"][0];
}

export const ChartBlock = ({ chart }: ChartBlockProps) => {
  const renderChart = () => {
    // If this chart is part of the LOTI pair, merge the lowess + annual series
    if (chart.id === "loti-lowess" || chart.id === "loti-annual") {
      // Prefer embedded series on the chart (data-side merge). Fallback to scanning plans for separate chart entries.
      const lowessSeries = (chart.series && chart.series.lowess) || chart.data;
      const annualSeries = chart.series && chart.series.annual;

      let annualData = annualSeries;

      if (!annualData) {
        const containingPlan = plans.find((p) => p.charts.some((c) => c.id === chart.id));
        if (containingPlan) {
          const annual = containingPlan.charts.find((c) => c.id === "loti-annual");
          if (annual && annual.data) annualData = annual.data;
        }
      }

      if (lowessSeries && annualData) {
        const map: Record<string, any> = {};
        lowessSeries.forEach((d) => {
          map[d.name] = { name: d.name, lowess: (d as any).value };
        });
        annualData.forEach((d) => {
          if (!map[d.name]) map[d.name] = { name: d.name };
          map[d.name].annual = (d as any).value;
        });
        const merged = Object.values(map).sort((a: any, b: any) => Number(a.name) - Number(b.name));

        return (
          <LineChart data={merged} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Line type="monotone" dataKey="lowess" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ r: 2 }} />
            <Line type="monotone" dataKey="annual" stroke="hsl(var(--chart-2))" strokeWidth={1.5} dot={{ r: 1 }} />
          </LineChart>
        );
      }
    }

    const commonProps = {
      data: chart.data,
      margin: { top: 10, right: 30, left: 0, bottom: 0 },
    };

    const axisProps = {
      stroke: "hsl(var(--muted-foreground))",
      fontSize: 12,
    };

    // If this is the CO seasons chart, render the CM_map.mov video instead of an area chart
    if (chart.id === "co-seasons") {
      return (
        <div className="w-full h-full flex items-center justify-center px-2">
          <div className="w-full max-w-5xl h-full">
            <video className="w-full h-full object-cover rounded-md" autoPlay muted loop playsInline>
              <source src={cmMap} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    }

    // If this is the canopy-change chart, render the timelapse video instead of a bar chart
    if (chart.id === "canopy-change") {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <video className="w-full h-full object-cover rounded-md" autoPlay muted loop playsInline>
            <source src={tempTimelapse} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    switch (chart.type) {
      case "line":
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
            />
          </LineChart>
        );
      
      case "area":
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--chart-2))" 
              fill="hsl(var(--chart-2) / 0.3)"
              strokeWidth={2}
            />
          </AreaChart>
        );
      
      case "bar":
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
          </BarChart>
        );
    }
  };

  return (
    <Card className="p-6 bg-card shadow-card">
      <h3 className="text-lg font-semibold mb-2">{chart.title}</h3>
      {/* Hide unit for canopy-change since we're showing a video */}
      {chart.id !== "canopy-change" && chart.unit && (
        <p className="text-sm text-muted-foreground mb-4">Unit: {chart.unit}</p>
      )}
      <div className={
        chart.id === "canopy-change" || chart.id === "co-seasons"
          ? "h-[480px] sm:h-[540px]"
          : "h-64"
      }>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
      {chart.note && (
        <p className="text-xs text-muted-foreground mt-4 italic">{chart.note}</p>
      )}
    </Card>
  );
};
