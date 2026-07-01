export interface Reel {
  id: number;

  title: string;

  description: string;

  thumbnail: string;
}

export interface ReelResponse {
  products: Reel[];

  total: number;

  skip: number;

  limit: number;
}
