import React, { useContext, useState } from "react";
import backgroundImage from "../assets/library-scaled.jpg";
import fbLogo from "../assets/facebook-log.svg";
import googleLogo from "../assets/google-logo.svg";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

// import React, { useContext, useState } from "react";
// import backgroundImage from "../assets/library-scaled.jpg";
// import fbLogo from "../assets/facebook-log.svg";
// import googleLogo from "../assets/google-logo.svg";
// import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";

// export default function Login() {
//     const [errorMessage, setErrorMessage] = useState('');
//     const { login } = useContext(AuthContext);

//     const location = useLocation();
//     const navigate = useNavigate();
//     const auth = getAuth();

//     const from = location.state?.from?.pathname || '/';

//     // login with Google
//     const handleGoogleLogin = () => {
//         const googleProvider = new GoogleAuthProvider();
//         signInWithPopup(auth, googleProvider)
//             .then((result) => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setErrorMessage(error.message);
//             });
//     };

//     // login with Facebook
//     const handleFacebookLogin = () => {
//         const facebookProvider = new FacebookAuthProvider();
//         signInWithPopup(auth, facebookProvider)
//             .then((result) => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(, { replace: true });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setErrorMessage(error.message);
//             });
//     };

//     // login with email and password
//     const handleLogin = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         login(email, password)
//             .then((result) => {
//                 const user = result.user;
//                 console.log(user);
//                 alert("Login successful!");
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 setErrorMessage(errorMessage);
//             });
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//             <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="max-w-md mx-auto">
//                     <div className="text-center">
//                             <h2 className="text-4xl font-bold text-indigo-600 mb-4">Buy and Sell Your Books</h2>
//                             <h3 className="text-3xl font-semibold text-gray-700">Please Login / Sign Up</h3>
//                         </div>
                      
//                         <div className="divide-y divide-gray-200">
//                             <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div className="relative">
//                                     <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" required />
//                                 </div>
//                                 <div className="relative">
//                                     <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" required />
//                                 </div>
//                                 <div className="text-base">
//                                     <p className="text-red-600 hover:underline hover:text-blue-600">
//                                         Forgot your password? <Link to="/forgot-password">Click Here</Link>
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <p>{errorMessage ? <span className="text-red-500 text-sm">{errorMessage}</span> : ''}</p>
//                                     <p className="text-base mt-1">If you haven't an account, please create one here <Link to="/create-user" className="underline text-blue-600 hover:text-blue-800">Sign Up</Link></p>
//                                 </div>
//                                 <div className="relative">
//                                     <button type="submit" className="bg-blue-500 text-white rounded px-6 py-2 hover:bg-blue-700 transition duration-300">Login</button>
//                                 </div>
//                             </form>
//                         </div>
//                         {/* social login */}
//                         <div>
//                             <hr className="my-6" />
//                             <div className="flex w-full items-center flex-col mt-5 gap-3">
//                                 <button onClick={handleGoogleLogin} className="block hover:opacity-80 bg-red-500 text-white py-2 px-4 rounded-full flex items-center transition duration-300">
//                                     <img src={googleLogo} alt="Google Logo" className="w-8 h-8 inline-block mr-2" />
//                                     Log in with Google
//                                 </button>
//                                 <button onClick={handleFacebookLogin} className="block hover:opacity-80 bg-blue-800 text-white py-2 px-4 rounded-full flex items-center transition duration-300">
//                                     <img src={fbLogo} alt="Facebook Logo" className="w-8 h-8 inline-block mr-2" />
//                                     Log in with Facebook
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();

    const from = location.state?.from?.pathname || '/login-navbar';

    // login with Google
    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
            });
    };

    // login with Facebook
    const handleFacebookLogin = () => {
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
            });
    };

    // login with email and password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                alert("Login successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-indigo-600 mb-4">Buy and Sell Your Books</h2>
                            <h3 className="text-3xl font-semibold text-gray-700">Please Login / Sign Up</h3>
                        </div>
                      
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" required />
                                </div>
                                <div className="relative">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" required />
                                </div>
                                <div className="text-base">
                                    <p className="text-red-600 hover:underline hover:text-blue-600">
                                        Forgot your password? <Link to="/forgot-password">Click Here</Link>
                                    </p>
                                </div>
                                <div>
                                    <p>{errorMessage ? <span className="text-red-500 text-sm">{errorMessage}</span> : ''}</p>
                                    <p className="text-base mt-1">If you haven't an account, please create one here <Link to="/create-user" className="underline text-blue-600 hover:text-blue-800">Sign Up</Link></p>
                                </div>
                                <div className="relative">
                                    <button type="submit" className="bg-blue-500 text-white rounded px-6 py-2 hover:bg-blue-700 transition duration-300">Login</button>
                                </div>
                            </form>
                        </div>
                        {/* social login */}
                        <div>
                            <hr className="my-6" />
                            <div className="flex w-full items-center flex-col mt-5 gap-3">
                                <button onClick={handleGoogleLogin} className="block hover:opacity-80 bg-red-500 text-white py-2 px-4 rounded-full flex items-center transition duration-300">
                                    <img src={googleLogo} alt="Google Logo" className="w-8 h-8 inline-block mr-2" />
                                    Log in with Google
                                </button>
                                <button onClick={handleFacebookLogin} className="block hover:opacity-80 bg-blue-800 text-white py-2 px-4 rounded-full flex items-center transition duration-300">
                                    <img src={fbLogo} alt="Facebook Logo" className="w-8 h-8 inline-block mr-2" />
                                    Log in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
