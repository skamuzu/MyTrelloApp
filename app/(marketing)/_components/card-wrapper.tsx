import { FeatureCardProps } from "../_types/types";
import { LayoutDashboard, ClockFading, Brain } from "lucide-react";
import FeatureCard from "./feature-card";

const List: FeatureCardProps[] = [
  {
    icon: LayoutDashboard,
    feature: "Visualize Your Workflow",
    description:
      "Boards provide a high-level, visual overview of all your projects, from start to finish.",
  },
  {
    icon: Brain,
    feature: "Intuitive Task Management",
    description:
      "Easily move tasks between different stages of your workflow with a simple drag-and-drop interface.",
  },
  {
    icon: ClockFading,
    feature: "Stay in Sync",
    description:
      "Keep everyone aligned with a detailed activity log and history for every card.",
  },
];

export default function CardWrapper() {
  return (
    <div className="flex space-x-6 w-full max-w-7xl">
      {List.map((item: FeatureCardProps, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          feature={item.feature}
          description={item.description}
        />
      ))}
    </div>
  );
}
