export interface MonumentStructure {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  location: Location;
}

export interface Location {
  country: string;
  city: string;
}
