// src/types/cards.ts

export type Card = {
  id: string;
  list_id: string;
  name: string;
  description: string | null;
  position: number;
  created_at: string;
  updated_at: string;
  color: string | null;
};

export type CreateCardInput = {
  list_id: string;
  name: string;
  description?: string;
  position?: number;
  color?: string;
};

export type UpdateCardInput = Partial<Pick<Card, "name" | "description" | "position" | "color">>;
