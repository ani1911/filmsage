// ShimmerUI/ShimmerHero.jsx
const ShimmerHero = () => (
  <div className="w-screen aspect-video bg-gray-900 relative animate-shimmer">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

    <div className="absolute bottom-20 left-10 h-16 w-1/2 bg-gray-700 rounded-md animate-pulse"></div>

    <div className="absolute bottom-8 left-10 flex gap-4">
      <div className="h-10 w-32 bg-gray-700 rounded-md animate-pulse"></div>
      <div className="h-10 w-24 bg-gray-700 rounded-md animate-pulse"></div>
    </div>
  </div>
);

export default ShimmerHero;
