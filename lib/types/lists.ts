export type List = {
  id: string;
  board_id: string;
  name: string;
  position: number; 
  created_at: string;
  updated_at: string;
};

export type CreateListInput = {
  board_id: string;
  name: string;
  position?: number; // optional, default to end
};

export type UpdateListInput = Partial<Pick<List, "name" | "position">>;
