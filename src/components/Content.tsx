import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  categoryTitle: string;
  movies: Movie[];
}

export function Content({categoryTitle, movies}: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {categoryTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}