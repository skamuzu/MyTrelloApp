import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getUserOrganizations } from "@/lib/actions/organizations";
import { createClient } from "@/lib/supabase/server";
import { PlusIcon, UsersIcon } from "lucide-react";
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
    <div className="py-4">
    <div className="md:grid flex flex-col  md:grid-cols-3 xl:grid-cols-4 gap-8">

      {organizations.map((org: any) => (
        <OrganizationCard
          key={org.id}
          name={org.name}
          color={org.color}
          desc={org.description}
          id={org.id}
        />
      ))}
      <CreateOrganizationDialog>
          <Card className="border-2 rounded-xl bg-muted hover:bg-gray-200 dark:hover:bg-muted dark:hover:opacity-90 border-dashed flex flex-col items-center justify-center p-4 ">
            <PlusIcon className="w-10 h-10"/>
            <h2 className="font-bold">Create New Organization</h2>
            <p className="text-muted-foreground">Start a new team or organization from scratch</p>
          </Card>
      </CreateOrganizationDialog>
    </div>
    </div>
  );
};

export default OrganizationList;
