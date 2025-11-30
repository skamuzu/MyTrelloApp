import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getUserOrganizations } from "@/lib/actions/organizations";
import { createClient } from "@/lib/supabase/server";
import { UsersIcon } from "lucide-react";
import CreateOrganizationDialog from "./create-organization-dialog";
import OrganizationCard from "./organization-card";

const OrganizationList = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) return <div>Not logged in</div>;

  if (error) return <div>{error.message}</div>;

  const organizations = await getUserOrganizations(user.id);

  if (organizations.length == 0) {
    return (
      <Card className="flex justify-center items-center flex-col p-8 mt-8 space-y-2 border-dashed">
        <UsersIcon className="text-primary w-10 h-10 mb-6" />
        <h1 className="text-2xl font-bold">Create your first organization</h1>
        <p className="text-muted-foreground w-1/3 mx-auto text-center">
          Organizations are where your team boards live. Get started by creating
          one for your team, project or company.
        </p>
        <CreateOrganizationDialog>
          <Button className="text-lg rounded-2xl p-6">
            Create Organization
          </Button>
        </CreateOrganizationDialog>
      </Card>
    );
  }

  return (
    <div>
    <div className="flex space-x-6">

      {organizations.map((org: any) => (
        <OrganizationCard
          key={org.id}
          name={org.name}
          color={org.color}
          desc={org.description}
        />
      ))}
    </div>
    </div>
  );
};

export default OrganizationList;
