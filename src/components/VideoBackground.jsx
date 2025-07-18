import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";


const VideoBackground = ({movieId}) => {

  const trailerData = useSelector((store) => store.movies?.trailerVideo);
  useTrailer(movieId);
  return (
    <div className="w-screen aspect-video hidden md:block">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailerData?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerData?.key}&controls=0&showinfo=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
