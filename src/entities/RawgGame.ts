export interface RawgGame {
  id: number;
  name: string;
  slug: string;
  genres: {
    name: string;
  }[];
  background_image: string;
  parent_platforms: {
    platform: {
      slug: string;
    };
  }[];
  metacritic: number;
  released: string;
}
