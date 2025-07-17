import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import logout from '../assets/logout.png';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const location = useLocation();
    const isLoginPage = location.pathname === '/';
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full px-4 md:px-8 py-3
        flex items-center justify-between
        ${
          isLoginPage
            ? 'bg-gradient-to-b from-black/90 via-black/50 to-transparent'
            : 'bg-transparent'
        }
      `}
    >
      <img
        className=" lg:ml-16 w-32 sm:w-40 md:w-48 lg:w-56"
        src={logo}
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img
            className="w-8 h-8 cursor-pointer hover:opacity-70 hover:scale-110"
            src={logout}
            alt="logout-icon"
            onClick={handleSignOut}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
