import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Info } from 'lucide-react';

const VideoTitle = ({ title}) => {
  const id = useSelector((store) => store?.movies?.nowPlayingMovies[4].id);
  if (!title) return null;
  return (
    <>
      <div className="pt-[28%]  hidden md:block px-6 md:px-21 w-screen aspect-video absolute bg-gradient-to-r from-black ">
        <h1 className="md:text-7xl text-5xl mb-3 font-semibold hidden md:block text-white ">
          {title}
        </h1>
        <div>
          <div className="mt-8 md:mt-4 py-2 ">
            <Link to={'/browse/' + id}>
              <button className=" px-4 py-1 md:hover:scale-95  md:px-8 md:py-2 rounded-md text-center mr-4  bg-white hover:bg-gray-200 cursor-pointer text-black font-semibold text-xl">
                <Play fill="black" className="inline mb-1" />
                Catch a Glimpse
              </button>
            </Link>
            <Link to="/user">
              <button className="px-4 md:hover:scale-95 py-1 md:px-8 md:py-2 rounded-md cursor-pointer  text-white bg-opacity-50 border-2 font-semibold text-xl">
                <Info className="inline mb-1 " /> Info
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden flex absolute left-[100px] top-[590px]">
        <div className="flex justify-between">
          <Link to={'/browse/' + id}>
            <button className="px-4 py-1 md:px-8 md:py-2 rounded-md text-center mr-4 bg-white hover:bg-gray-200 text-black font-semibold text-xl">
              <Play fill="black" className="inline-flex mb-1" /> Play
            </button>
          </Link>
          <Link to={'/user'}>
            <button className="px-4 py-1 md:px-8 md:py-2 rounded-md bg-gray-600 text-white bg-opacity-70 font-semibold text-xl">
              <Info className="inline mb-1" /> Info
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
