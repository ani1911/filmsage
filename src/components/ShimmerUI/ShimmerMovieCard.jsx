// ShimmerUI/ShimmerMovieCard.jsx
import React from 'react';

/**
 * ShimmerMovieCard Component
 * Renders a shimmering placeholder for a single movie card during loading.
 * It mimics the dimensions and rounded corners of the actual MovieCard.
 *
 * This component relies on the 'animate-shimmer' CSS class defined in your global stylesheet.
 */
const ShimmerMovieCard = () => {
  return (
    // This div mirrors the dimensions and margin of your actual MovieCard.
    // - flex-none: Prevents the item from shrinking within a flex container.
    // - w-28 md:w-40 lg:w-48 xl:w-56: Responsive widths, matching MovieCard.
    // - mr-5 mb-4: Spacing, matching MovieCard.
    // - rounded-xl overflow-hidden: Matches the rounded corners of the MovieCard.
    // - bg-gray-800: A dark background color for the placeholder.
    // - relative: Essential for positioning the absolute shimmer gradient inside.
    // - animate-shimmer: Applies the custom CSS keyframe animation for the shimmer effect.
    <div className="flex-none w-28 md:w-40 lg:w-48 xl:w-56 mr-5 mb-4 rounded-xl overflow-hidden bg-gray-800 relative animate-shimmer">
      {/* Aspect ratio box to maintain the 2:3 poster shape.
          pb-[150%] means padding-bottom is 150% of the width, creating a height that's 1.5 times the width. */}
      <div className="relative pb-[150%]">
        {/* This inner div creates the actual shimmering effect by applying a moving gradient.
            The 'animate-shimmer' class on the parent handles the movement of this gradient. */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
      </div>
    </div>
  );
};

export default ShimmerMovieCard;
