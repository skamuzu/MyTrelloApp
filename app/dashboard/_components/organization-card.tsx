import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type OrganizationCardProps = {
  color: string;
  name: string;
  desc: string;
};

const OrganizationCard = ({ color, name, desc }: OrganizationCardProps) => {
  return (
    <Card className="bg-none border-0 shadow-xl">
      <div
        className="w-full h-24 rounded-t-2xl hover:opacity-80"
        style={{ backgroundColor: `${color}` }}
      ></div>
    <div className="p-3 flex space-y-1 flex-col">

      <CardTitle>{name}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </div>
    </Card>
  );
};

export default OrganizationCard;
