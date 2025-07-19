// ShimmerUI/ShimmerMovieList.jsx

import ShimmerMovieCard from './ShimmerMovieCard'; // Ensure this path is correct based on your folder structure

/**
 * ShimmerMovieList Component
 * Renders a shimmering placeholder for an entire row of movie lists,
 * including a title placeholder.
 *
 * This component uses 'animate-pulse' for the title placeholder
 * and relies on 'ShimmerMovieCard' for the card placeholders.
 *
 * @param {object} props - Component props.
 * @param {string} props.title - The title to display for the loading section (though it's a placeholder).
 * @param {number} [props.cardsCount=8] - Number of shimmer cards to display in the row.
 * Defaults to 8, mimicking a typical row.
 */
const ShimmerMovieList = ({ title, cardsCount = 8 }) => {
  return (
    // This div mirrors the structure of your actual MovieList component,
    // ensuring consistent spacing and layout during loading.
    <div className="relative z-10">
      <div className="pl-5 md:pl-10 lg:pl-16">
        {/* Placeholder for the movie list title.
            - bg-gray-700: Dark gray background for the title placeholder.
            - h-8 w-48: Fixed height and width to visually mimic a title.
            - rounded-md: Slightly rounded corners for the title placeholder.
            - mt-8 py-7 mb-4: Matches the vertical spacing of your actual MovieList title.
            - animate-pulse: Applies a subtle pulsing animation to the title placeholder. */}
        <h1 className="bg-gray-700 h-8 w-48 rounded-md mt-8 py-7 mb-4 animate-pulse"></h1>

        {/* Horizontal scroll container for shimmer cards.
            - flex overflow-x-scroll no-scrollbar py-2: Mimics the scrolling behavior
              and hidden scrollbar of the actual MovieList. */}
        <div className="flex overflow-x-scroll no-scrollbar py-2">
          <div className="flex">
            {/* Render multiple ShimmerMovieCard components to fill the row.
                Array(cardsCount).fill("") creates an array of specified length
                to map over, generating the desired number of shimmer cards. */}
            {Array(cardsCount)
              .fill('')
              .map((_, index) => (
                <ShimmerMovieCard key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMovieList;
