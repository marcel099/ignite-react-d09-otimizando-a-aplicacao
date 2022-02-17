import { ContentHeader } from "./ContentHeader";
import { ContentMoviesList } from "./ContentMoviesList";

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <ContentHeader selectedGenreTitle={selectedGenre.title} /> 
      <ContentMoviesList movies={movies} />
    </div>
  )
}
