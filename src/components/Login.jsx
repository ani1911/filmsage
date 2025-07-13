import { useState } from 'react';
import Header from './Header';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="fixed top-0 left-0 w-full h-full object-cover blur- brightness-34 z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
        />
      </div>
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <form className="bg-black/50 p-8 rounded-md text-white w-[90%] max-w-md ">
          <h2 className="text-2xl font-bold mb-4">
            {isSignInForm
              ? 'Lights, Camera, Login!'
              : 'No login? join the magic now'}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Script starts with your name..."
              className="p-4 m-4 w-full bg-gray-800 text-white rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Ready to binge? Type your email"
            className="p-4 m-4 w-full bg-gray-800 text-white rounded-lg"
          />
          <input
            type="password"
            placeholder="......."
            className="p-4 m-4 w-full bg-gray-800 text-white rounded-lg"
          />
          <button className="p-4 m-4 w-full bg-red-600 hover:bg-red-700 rounded">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>

          <p className="text-gray-300 text-base mt-4">
            {isSignInForm ? 'New to FilmSage? ' : 'Already joined us? '}
            <span
              onClick={toggleSignInform}
              className="text-white hover:underline cursor-pointer"
            >
              {isSignInForm ? 'Begin your journey' : ' Just sign in'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
