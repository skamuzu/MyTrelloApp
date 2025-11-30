import { Card } from "@/components/ui/card";

type OrganizationCardProps = {
  color: string;
  name: string;
  desc: string;
};

const OrganizationCard = ({ color, name, desc }: OrganizationCardProps) => {
  return (
    <Card className="w-1/3">
      <div
        className="w-full h-16"
        style={{ backgroundColor: `#${color}` }}
      ></div>
    <div>

      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
    </Card>
  );
};

export default OrganizationCard;
