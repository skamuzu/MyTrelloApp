"use server";

import sql from "../db";
import { Organization } from "../types/organizations";
import z from "zod";
import { refresh, revalidatePath } from "next/cache";

const CreateOrganizationSchema = z.object({
  name: z.string(),
  description: z.string(),
  created_by: z.uuidv4(),
  color: z.string(),
});

const UpdateOrganizationSchema = z.object({
  id: z.uuidv4(),
  name: z.string(),
  description: z.string(),
  color: z.string(),
});

export async function getUserOrganizations(
  profileId: string
): Promise<Organization[]> {
  const organizations = await sql<Organization[]>`
    SELECT org.* FROM organizations org
    JOIN organization_members om
    ON org.id = om.organization_id
    WHERE om.profile_id = ${profileId}
    ORDER BY org.created_at DESC`;
  return organizations;
}

export async function createOrganization(formData: FormData) {
  const validatedFields = CreateOrganizationSchema.parse({
    name: formData.get("name"),
    description: formData.get("desc"),
    created_by: formData.get("user_id"),
    color: formData.get("color"),
  });

  await sql`
  INSERT INTO organizations
  (name, description, created_by, color)
  VALUES
  (${validatedFields.name},${validatedFields.description},${validatedFields.created_by}, ${validatedFields.color})`;
  refresh();
}

export async function deleteOrganization(
  organization_id: string,
  profileId: string
): Promise<Organization | null> {
  const [deletedOrg] = await sql<Organization[]>`
    DELETE FROM organizations
    WHERE id = ${organization_id}
     AND created_by = ${profileId}
    RETURNING *;
  `;

  revalidatePath("/dashboard");
  return deletedOrg ?? null;
}

export async function updateOrganization(formData: FormData) {
  const validatedFields = UpdateOrganizationSchema.parse({
    id: formData.get("id"),
    name: formData.get("name"),
    description: formData.get("desc"),
    color: formData.get("color"),
  });

  const org = await sql`
  UPDATE organization
  SET
    name = ${validatedFields.name},
    description = ${validatedFields.description},
    color = ${validatedFields.color}
  WHERE id = ${validatedFields.id}
  RETURNING *;
`;

  return org[0];
}
