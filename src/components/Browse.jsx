import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import MovieList from './MovieList';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <MovieList/>
    </div>
  );
};

export default Browse;
