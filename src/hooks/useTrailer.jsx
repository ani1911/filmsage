import { useDispatch, useSelector } from 'react-redux';
import { OPTION_API } from '../utils/constant';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/' +
          movieId +
          '/videos?language=en-US',
        OPTION_API
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === 'Trailer'
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useTrailer;
