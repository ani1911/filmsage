import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { OPTION_API } from '../utils/constant';
import { addTopRatedMovies,setLoading } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
     dispatch(setLoading(true));
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      OPTION_API
    );
      const json = await data.json();

      console.log(json.result);
    dispatch(addTopRatedMovies(json.results));
     dispatch(setLoading(false));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
