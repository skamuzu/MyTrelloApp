import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import OrganizationCardDropdown from "./organization-card-dropdown";

type OrganizationCardProps = {
  color: string;
  name: string;
  desc: string;
  id: string;
};

const OrganizationCard = ({ color, name, desc, id }: OrganizationCardProps) => {
  return (
    <Card className="bg-none border-0 shadow-xl">
      <div
        className="w-full h-24 rounded-t-2xl group hover:opacity-80 p-2 items-start flex justify-end"
        style={{ backgroundColor: `${color}` }}
      >
        <OrganizationCardDropdown id={id}/>

      </div>
    <div className="p-3 flex space-y-1 flex-col">

      <CardTitle>{name}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </div>
    </Card>
  )
};

export default OrganizationCard;
