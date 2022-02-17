import { memo } from "react";
import { MovieCard } from "./MovieCard";

interface ContentMoviesListProps {
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

function ContentMoviesListComponent({ movies }: ContentMoviesListProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}

export const ContentMoviesList = memo(
  ContentMoviesListComponent,
  (prevProps, nextProps) => Object.is(prevProps.movies, nextProps.movies)
)
