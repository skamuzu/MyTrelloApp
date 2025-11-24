import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureCardProps } from "../_types/types";



export default function FeatureCard({
  icon,
  feature,
  description,
}: FeatureCardProps) {
  let Icon = icon;
  return (
    <Card className=" w-1/3 h-55">
      <CardHeader>
        <Icon color="#137FEC" size={60} className="p-4 bg-accent rounded-xl" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl">{feature}</CardTitle>
        <CardDescription>
            {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
