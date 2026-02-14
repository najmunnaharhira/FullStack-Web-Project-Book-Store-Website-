import React, { useContext, useState } from "react";
import fbLogo from "../assets/facebook-log.svg";
import googleLogo from "../assets/google-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // Handle registration with Google
  const handleRegister = () => {
    signUpWithGmail()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error('Google sign up error:', error);
        setErrorMessage('Failed to sign up with Google. Please try again.');
      });
  };

  // Handle registration with email and password
  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Email/password sign up error:', error);
      setErrorMessage('Failed to sign up with email and password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold">Please Create An Account</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSignup} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email" type="email" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" required />
                </div>
                <div className="relative">
                  <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" required />
                </div>
                <div>
                  <p className='text-base'>If you have an account. Please <Link to='/login' className='underline text-blue-600'>Login Now</Link> here</p>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div className="relative">
                  <button type='submit' className="bg-blue-500 text-white rounded px-6 py-1" >Sign up</button>
                </div>
              </form>
            </div>
          </div>

          {/* Social login */}
          <div>
            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className='block flex items-center'>
                <img src={googleLogo} alt="Google Logo" className='w-8 h-8 mr-2' />
                Log in with Google
              </button>
              {/* Facebook login button */}
              {/* Note: Facebook login implementation is not included here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
