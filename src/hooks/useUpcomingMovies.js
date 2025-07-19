import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { OPTION_API } from '../utils/constant';
import { addUpcomingMovies,setLoading } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
     dispatch(setLoading(true));
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      OPTION_API
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
     dispatch(setLoading(false));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
