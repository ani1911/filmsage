import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useLocation } from 'react-router-dom';
import GPTix from '../assets/GPTix.png';
import WatchNest from '../assets/WatchNest.png';
import { LogOut } from 'lucide-react';

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate('/error');
      });
  };

  const handleGPTixClick = () => {
    navigate('/gpt-search');
  };

  const handleWatchNestClick = () => {
    navigate('/watchlist');
  };

  const handleOnLogoclick = () => {
    navigate('/browse');
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        if (location.pathname === '/' || location.pathname === '/error') {
          navigate('/browse');
        }
      } else {
        dispatch(removeUser());
        if (location.pathname !== '/') {
          navigate('/');
        }
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate, location.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 z-30 w-full px-4 md:px-8 py-3
        flex items-center justify-between
        ${
          isLoginPage
            ? 'bg-gradient-to-b from-black/90 via-black/50 to-transparent'
            : 'bg-gradient-to-b from-black/70 to-transparent'
        }
      `}
    >

      <img
        className="lg:ml-16 w-32 sm:w-40 md:w-48 lg:w-56 cursor-pointer"
        src={logo}
        alt="filmSage logo"
        onClick={handleOnLogoclick}

      />


      {user && (
        <div className="flex items-center space-x-2 md:space-x-4 mr-4 md:mr-2">

          <div
            onClick={handleGPTixClick}
            className="group flex flex-col items-center p-2 rounded-lg cursor-pointer
                       transition-colors duration-200 hover:bg-gray-700/50"
          >
            <img
              className="w-9 h-9 md:w-11 md:h-11 object-contain mb-0.5"
              src={GPTix}
              alt="GPT logo"
            />

            <span className="text-white text-xs md:text-sm font-semibold opacity-0 h-0 overflow-hidden
                             group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible
                             transition-all duration-200">
              GPT Search
            </span>
          </div>


          <div
            onClick={handleWatchNestClick}
            className="group flex flex-col items-center p-2 rounded-lg cursor-pointer
                       transition-colors duration-200 hover:bg-gray-700/50"
          >
            <img
              className="w-9 h-9 md:w-10 md:h-10 object-contain mb-0.5"
              src={WatchNest}
              alt="WatchList logo"
            />

            <span className="text-white text-xs md:text-sm font-semibold opacity-0 h-0 overflow-hidden
                             group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible
                             transition-all duration-200">
              WatchList
            </span>
          </div>


          <button
            onClick={handleSignOut}
            className="group flex flex-col items-center p-2 rounded-lg cursor-pointer
                       transition-colors duration-200 hover:bg-gray-700/50"
          >
            <LogOut className="w-9 h-9 md:w-10 md:h-10 text-white mb-0.5" />

            <span className="text-white text-xs md:text-sm font-semibold opacity-0 h-0 overflow-hidden
                             group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible
                             transition-all duration-200">
              Sign Out
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;