import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full px-4 md:px-8 py-3 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex justify-center sm:justify-start">
      <img
        className=" lg:ml-16 w-32 sm:w-40 md:w-48 lg:w-56"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default Header;


