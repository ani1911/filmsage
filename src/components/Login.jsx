import { useState, useRef } from 'react';
import Header from './Header';
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import background from '../assets/background.jpg';
import { updateProfile } from 'firebase/auth';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;

          await updateProfile(user, {
            displayName: name.current.value,
          });


        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      //sing in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="fixed top-0 left-0 w-full h-full object-cover blur- brightness-34 z-0"
          src={background}
        />
      </div>
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/50 p-8 rounded-md text-white w-[90%] max-w-md "
        >
          <h2 className="text-2xl font-bold mb-4">
            {isSignInForm
              ? 'Lights, Camera, Login!'
              : 'No login? join the magic now'}
          </h2>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Script starts with your name..."
              className="p-4 m-4 w-full bg-gray-800 text-white rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Ready to binge? Type your email"
            className="p-4 m-4 w-full bg-gray-800 text-white rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="......."
            className="p-4 m-4 w-full bg-gray-800 text-white rounded-lg"
          />
          <p className="text-red-700 font-bold text-lg p-2 ml-2">
            {errorMessage}
          </p>
          <button
            onClick={handleButtonClick}
            className="p-4 m-4 w-full bg-red-600 hover:bg-red-700 rounded hover:scale-105"
          >
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
