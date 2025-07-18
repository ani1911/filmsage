import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[3];
  console.log(mainMovie);
  const { original_title, id } = mainMovie;

  return (
    <div className="pt-[10%] md:py-0 md:-mt-24 bg-black">
      <VideoTitle title={original_title} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
