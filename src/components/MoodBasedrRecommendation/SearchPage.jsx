
import Header from '../Header';
import MoodResults from './MoodResults';
import MoodSearchBar from './MoodSearchBar';

const SearchPage = () => {
  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse-medium"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-pulse-fast"></div>
      </div>
       <Header/>
      <div className="relative z-10 pt-[70px] md:pt-[90px] pb-8">
        <header className="text-center py-8 px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
            Find Your Movie Soulmate
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Describe your mood or what you're feeling, and let AI find the
            perfect movie!
          </p>
        </header>
        <MoodSearchBar />
        <MoodResults/>
      </div>
    </div>
  );
};

export default SearchPage;
