// src/types/boards.ts

export type Board = {
  id: string;
  organization_id: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  created_by: string; // profile id
  color: string | null; // hex color like "#FFFFFF"
};

export type CreateBoardInput = {
  organization_id: string;
  name: string;
  description?: string;
  created_by: string;
  color?: string;
};

export type UpdateBoardInput = Partial<Pick<Board, "name" | "description" | "color">>;
