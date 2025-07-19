import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.vote_average);

  return (
    <div className="bg-black">
      <div className=" md:-mt-64 relative z-20">
        <MovieList
          title={'Now Playing'}
          movies={movies.nowPlayingMovies}

        />
        <MovieList
          title={'Popular'}
          movies={movies.popularMovies}

        />
        <MovieList
          title={'Top Rated'}
          movies={movies.topRatedMovies}

        />
        <MovieList
          title={'Upcoming'}
          movies={movies.upcomingMovies}

        />
      </div>
    </div>
  );
};

export default MovieListContainer;
