import { IMG_CDN_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const MovieCard = ({ posterPath, id }) => {

  if (!posterPath) {
    return null;
  }

  return (
    <div className="flex-none w-28 md:w-40 lg:w-48 xl:w-56 mr-5 mb-4 transform transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-2xl rounded-xl overflow-hidden cursor-pointer group">
      <Link to={'/browse/' + id}>

        <div className="relative pb-[150%]">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-xl group-hover:ring-4 group-hover:ring-red-600 group-hover:ring-offset-2 group-hover:ring-offset-black transition-all duration-300"
            src={IMG_CDN_URL + posterPath}
            alt="Movie Poster" // Generic alt text
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/200x300/000000/FFFFFF?text=No+Poster';
            }}
          />

        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
