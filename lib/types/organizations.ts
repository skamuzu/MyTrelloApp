export type Organization = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  created_by: string;
  color: string | null;
};

export type CreateOrganizationInput = {
  name: string;
  description?: string | null;
  created_by: string;
  color?: string | null;
};

export type OrganizationCardProps = {
  color: string;
  name: string;
  desc: string;
  id: string;
};