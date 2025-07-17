import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { OPTION_API } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      OPTION_API
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;