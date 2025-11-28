export type Organization = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  created_by: string;
  image_url: string | null;
};

export type CreateOrganizationInput = {
  name: string;
  description?: string | null;
  created_by: string;
  image_url?: string | null;
};

export type UpdateOrganizationInput = Partial<Pick<Organization, "name" | "description" | "image_url">>;
