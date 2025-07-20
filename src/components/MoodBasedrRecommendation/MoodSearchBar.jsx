import { useRef } from 'react';
import { OPTION_API } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addGPTMovieResult } from '../../utils/gptSlice';
// import openai from '../../utils/gpt';

const MoodSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // const searchQuery =
    //   'Act as a Movie Recommendation system and suggest 5 movies for the query: ' +
    //   searchText.current.value +
    //   '. Only give me the names of the movies, comma separated like the example result. Example Result: Inception, 3 Idiots, The Dark Knight, Dangal, Interstellar';

    // const gptResult = await openai.chat.completions.create({
    //   model: 'gpt-3.5-turbo-1106',
    //   messages: [{ role: 'user', content: searchQuery }],
    // });
    const movieNames = [
      '3 Idiots',
      'Zindagi Na Milegi Dobara',
      'Inside Out',
      'The Pursuit of Happyness',
      'La La Land',
    ];

    const promiseArray = movieNames.map((movie) => searchMoiveTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGPTMovieResult({ movieNames: movieNames, movieResults: tmdbResults })
    );
  };

  const searchMoiveTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&page=1',
      OPTION_API
    );
    const json = await data.json();

    return json.results && json.results.length > 0 ? json.results[0] : null;
  };

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 mb-12">
      <form
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-6 md:p-8 shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <textarea
          ref={searchText}
          className="w-full h-32 md:h-40 p-4 bg-white bg-opacity-90 rounded-lg border border-gray-600 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-lg"
          placeholder="e.g., I want a feel-good sci-fi movie with some humor, or a thrilling mystery with a strong female lead..."
        ></textarea>
        <button
          className="mt-4 w-full py-3 rounded-lg font-bold text-xl transition-all duration-300 cursor-pointer bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 hover:scale-105 shadow-lg"
          onClick={handleGptSearchClick}
        >
          Find Movie
        </button>
      </form>
    </section>
  );
};

export default MoodSearchBar;
