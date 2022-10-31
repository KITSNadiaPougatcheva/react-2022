export interface MovieCardInterface {
  details: {
    img: string | undefined;
    title: string;
    description?: string;
    short_description?: string;
    key: string;
    range: number;
    genre?: string;
  };
  key: string;
}
