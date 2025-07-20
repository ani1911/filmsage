import { useSelector } from 'react-redux';
import MovieList from '../MovieList';

const MoodResults = () => {
  const { movieResults, MovieName } = useSelector((store) => store.gpt);
  if (!movieResults) return null;
  return (
    <>
      <MovieList
        title={'Movies Found for Your Mood'}
        movies={movieResults}
      />
    </>
  );
};

export default MoodResults;
