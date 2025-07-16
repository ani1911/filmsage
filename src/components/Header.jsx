import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import logout from '../assets/logout.png';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.user);
  const Navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate('/');
      })
      .catch((error) => {
        Navigate('/error');
      });
  };
  return (
    <div className="fixed top-0 left-0 z-10 w-full px-4 md:px-8 py-3 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between">
      <img
        className=" lg:ml-16 w-32 sm:w-40 md:w-48 lg:w-56"
        src={logo}
        alt="logo"
      />
      {user && (<div className="flex">
        <img
          className="w-8 h-8 cursor-pointer hover:opacity-70 hover:scale-110"
          src={logout}
          alt="logout-icon"
          onClick={handleSignOut}
        />
      </div>)}
    </div>
  );
};

export default Header;
