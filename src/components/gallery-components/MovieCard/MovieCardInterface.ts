export interface MovieCardInterface {
  details: {
    poster_path: string | undefined;
    title: string;
    overview?: string;
    short_description?: string;
    id: string;
    vote_average: number;
    genres?: string[];
    release_date?: string;
  };
}
