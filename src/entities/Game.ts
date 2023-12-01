export default interface Game {
  _id?: string;
  name: string;
  genres: string[];
  platforms: string[];
  price: number;
  releaseDate: Date;
  stock: number;
  gameArtUrl: string;
  criticScore: number;
}
