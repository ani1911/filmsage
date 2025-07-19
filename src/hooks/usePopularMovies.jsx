import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { OPTION_API } from '../utils/constant';
import { addPopularMovies , setLoading} from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    dispatch(setLoading(true));
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?&page=1',
      OPTION_API
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
