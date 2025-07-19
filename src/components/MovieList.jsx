import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative z-10">
      <div className="pl-5 md:pl-10 lg:pl-16">
        <h1 className="text-white md:text-3xl text-2xl font-bold mt-10 py-5 mb-4">
          {title}
        </h1>

        <div className="flex overflow-x-scroll no-scrollbar py-2">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard
                key={movie?.id}
                id={movie?.id}
                posterPath={movie?.poster_path}
                rating={movie?.vote_average}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
