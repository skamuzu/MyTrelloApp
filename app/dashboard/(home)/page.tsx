import OrganizationList from "../_components/organization-list";

const Page = () => {
  return (
    <div className="p-6 ">
        <div>
            <h1 className="text-3xl font-bold">Your Workspaces</h1>
            <p>An overview of all organizations you belong to.</p>
            <OrganizationList/>
        </div>
    </div>
  )
}

export default Page;