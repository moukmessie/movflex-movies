export class MovieModel {
  id!: number;
  title!: string;
  poster_path!: string;
  overview!: string;
  vote_average!: number;
  genre?: string;
  release_date!: Date;
}
