export interface MonumentStructure {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  country: string;
  city: string;
}

export type MonumentData = Omit<MonumentStructure, "id">;
