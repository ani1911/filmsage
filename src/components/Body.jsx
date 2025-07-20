import { createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider } from 'react-router-dom';
import SearchPage from './MoodBasedrRecommendation/SearchPage';
import MovieDetailPage from './MovieDetailPage';
import WatchList from './WatchList';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/Browse',
      element: <Browse />,
    },
    {
      path: '/gpt-search',
      element: <SearchPage />,
    },
    {
      path: '/browse/:movieId',
      element :<MovieDetailPage/>
    }, {
      path: '/watchlist',
      element:<WatchList/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
