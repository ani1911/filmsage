const VideoTitle = ({title,overview}) => {
    return (
      <div className="pt-46 px-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className="bg-gray-500 text-white text-lg p-4 px-16 m-2">
            Trailer
          </button>
          <button className="bg-gray-500 text-white text-lg p-4 px-16 m-2">
            Info
          </button>
        </div>
      </div>
    );
};

export default VideoTitle;
