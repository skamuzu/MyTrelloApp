import sql from "../db";
import { Organization, CreateOrganizationInput } from "../types/organizations";

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

export async function createOrganization(
  input: CreateOrganizationInput
): Promise<Organization> {
  const { name, description = null, created_by, image_url = null } = input;
  const [organization] = await sql<Organization[]>`
    INSERT INTO organizations (name, description, created_by, image_url)
    VALUES (${name}, ${description}, ${created_by}, ${image_url})
    RETURNING *;
  `;

  return organization;
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

  return deletedOrg ?? null;
}
