export type RoleType = "admin" | "member";

export type OrganizationMember = {
  organization_id: string;
  profile_id: string;
  role: RoleType;
};

export type AddMemberInput = {
  organization_id: string;
  profile_id: string;
  role?: RoleType; 
};