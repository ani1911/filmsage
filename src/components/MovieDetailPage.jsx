import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant'; // Assuming you have API_OPTIONS for TMDB
import { addMovieDetail, addTrailerVideo, setLoading } from '../utils/moviesSlice'; // Will modify moviesSlice
import Header from './Header'; // Keep the header for navigation
import { Play, ListPlus, X } from 'lucide-react'; // Icons for buttons
import YouTube from 'react-youtube'; // For embedding YouTube reviews

// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const MovieDetailPage = () => {
  const { movieId } = useParams(); // Get movie ID from URL
  const dispatch = useDispatch();
  const movieDetail = useSelector((store) => store.movies.movieDetail);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const isLoading = useSelector((store) => store.movies.isLoading);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewVideoId, setReviewVideoId] = useState(null); // To store YouTube ID of the review

  // Function to fetch movie details and trailer
  const getMovieAndTrailerDetails = async () => {
    dispatch(setLoading(true));
    try {
      // Fetch movie details
      const movieDetailsResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const movieDetailsData = await movieDetailsResponse.json();
      dispatch(addMovieDetail(movieDetailsData));

      // Fetch videos (for trailer)
      const videosResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const videosData = await videosResponse.json();

      const trailer = videosData.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );
      dispatch(addTrailerVideo(trailer || videosData.results[0])); // Fallback to first video if no trailer
    } catch (error) {
      console.error('Error fetching movie details or trailer:', error);
      // Handle error (e.g., show an error message)
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieAndTrailerDetails();
    }
    // Clean up trailer and movie detail on unmount (optional, but good practice)
    return () => {
      dispatch(addMovieDetail(null));
      dispatch(addTrailerVideo(null));
    };
  }, [movieId, dispatch]);

  if (isLoading || !movieDetail) {
    return (
      <div className="bg-black h-screen flex justify-center items-center text-white text-2xl">
        Loading Movie Details...
      </div>
    );
  }

  // Determine the YouTube URL for the trailer background
  const trailerKey = trailerVideo?.key;
  const youtubeTrailerOpts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: trailerKey, // Essential for looping
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3, // Disable annotations
    },
  };

  // Function to handle "View Review" click
  const handleViewReview = async () => {
    // This is where you'd implement logic to find a review video ID.
    // For demonstration, let's hardcode one or assume you have a way to fetch it.
    // In a real app, you might:
    // 1. Search YouTube for "[Movie Title] review" and pick the top result.
    // 2. Have a curated list of reviews in your database.
    // 3. Use a more advanced AI to find relevant reviews.
    // For now, let's use a placeholder or a simple search if available.

    // Example: Searching YouTube (requires a YouTube Data API key and a backend)
    // This is complex for a frontend-only example. For now, let's mock it.
    console.log("Searching for reviews for:", movieDetail.title);
    // Replace this with actual logic to get a review video ID
    const foundReviewId = "dQw4w9WgXcQ"; // Example: Rick Astley's "Never Gonna Give You Up"
    setReviewVideoId(foundReviewId);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
    setReviewVideoId(null);
  };

  const handleAddToWatchlist = () => {
    // Dispatch action to add movie to watchlist slice
    console.log("Adding to watchlist:", movieDetail.title);
    // Example: dispatch(addMovieToWatchlist(movieDetail));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      <Header /> {/* Header should always be visible */}

      {/* Trailer Background */}
      {trailerKey ? (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
          <YouTube
            videoId={trailerKey}
            opts={youtubeTrailerOpts}
            className="w-full h-full object-cover"
            // Ensure the trailer stops when modal is open
            onPlay={() => showReviewModal ? youtubeTrailerOpts.playerVars.autoplay = 0 : null}
            onPause={() => youtubeTrailerOpts.playerVars.autoplay = 0}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gray-800 flex justify-center items-center text-center text-xl z-0">
          No trailer available for this movie.
        </div>
      )}

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col justify-end p-8 md:p-16 h-full bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
          {movieDetail.title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          {truncateText(movieDetail.overview, 180)} {/* Show truncated overview */}
          {movieDetail.overview.length > 180 && (
            <span className="text-gray-400 cursor-pointer hover:underline"> [More]</span>
          )}
        </p>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleViewReview}
            className="flex items-center bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
          >
            <Play fill="black" className="mr-2" size={24} /> View Review
          </button>
          <button
            onClick={handleAddToWatchlist}
            className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-colors"
          >
            <ListPlus className="mr-2" size={24} /> Add to Watchlist
          </button>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4">
          <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl md:max-w-6xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">Movie Review: {movieDetail.title}</h2>
              <button onClick={handleCloseReviewModal} className="text-gray-400 hover:text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex-grow flex flex-col md:flex-row p-4 overflow-auto">
              {/* Left: YouTube Video */}
              <div className="w-full md:w-2/3 md:pr-4 mb-4 md:mb-0">
                {reviewVideoId ? (
                  <YouTube
                    videoId={reviewVideoId}
                    opts={{ playerVars: { autoplay: 1 } }}
                    className="w-full h-full aspect-video"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex justify-center items-center text-gray-400">
                    No review video found.
                  </div>
                )}
              </div>

              {/* Right: Stats Panel */}
              <div className="w-full md:w-1/3 bg-gray-800 rounded-lg p-4 flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-white">Reviewer Insights</h3>
                <div className="space-y-3 text-lg">
                  <p><span className="font-medium text-blue-400">Likes:</span> 15K 👍</p> {/* Mock data */}
                  <p><span className="font-medium text-yellow-400">Comments:</span> 1.2K 💬</p> {/* Mock data */}
                  <p><span className="font-medium text-green-400">Reviewer Credibility:</span> 85% 🔥</p> {/* Mock data */}
                  <p className="text-sm text-gray-400 mt-4">
                    Credibility is a calculated metric based on engagement and channel activity.
                  </p>
                </div>
                {/* You can add more detailed reviewer info here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;