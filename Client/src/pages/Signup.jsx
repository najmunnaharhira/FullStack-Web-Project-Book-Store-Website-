import Axios from "axios";
import React, { useContext, useState } from "react";
import fbLogo from "../assets/facebook-log.svg";
import googleLogo from "../assets/google-logo.svg";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { signUpWithGmail } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // State variables for registration form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    // Function to handle email/password signup
    const handleSignup = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("Email", email);
        formData.append("Password", password);
        formData.append("UserName", username);
        formData.append("ProfileImage", profileImage);

        try {
            const response = await Axios.post(
                (`${API_BASE_URL}//register`),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("User has been registered", response.data);
            navigate(from, { replace: true });
        } catch (error) {
            console.error("Error registering user", error);
            setErrorMessage(error.message);
        }
    };

    // Function to handle Google signup
    const handleGoogleSignup = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("Google user signed up", user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Error signing up with Google", error);
                setErrorMessage(error.message);
            });
    };

    // Function to handle Facebook signup
    const handleFacebookSignup = () => {
        const facebookProvider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                console.log("Facebook user signed up", user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Error signing up with Facebook", error);
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://th.bing.com/th/id/R.ff4cc7d14830105b0662eb537568c5a8?rik=jb5Mn0EI7iQqvQ&pid=ImgRaw&r=0")' }}>
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
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="relative">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="relative">
                                    <input id="username" name="username" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} required />
                                </div>
                                <div className="relative">
                                    <input id="profileImage" name="profileImage" type="file" className="peer h-10 w-full border-b-2 border-gray-300 text-blue-900 focus:outline-none focus:border-blue-600" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} />
                                </div>
                                <label htmlFor="profileImage">Upload Your Image</label>
                                <div>
                                    <p className='text-base'>If you have an account, please <Link to='/login' className='underline text-blue-600'>Login Now</Link></p>
                                </div>
                                <div className="text-base">
                                    <p className="text-red-600 hover:underline hover:text-blue-600">
                                        Forgot your password? <Link to="/forgot-password">Click Here</Link>
                                    </p>
                                </div>
                                <div className="relative">
                                    <button type='submit' className="bg-blue-500 text-white rounded px-6 py-1 hover:bg-blue-700 transition duration-300">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* social login */}
                    <div>
                        <hr className="my-6" />
                        <div className="flex w-full items-center flex-col mt-5 gap-3">
                            <button onClick={handleGoogleSignup} className='block bg-red-500 text-white py-2 px-4 rounded-full flex items-center transition duration-300 hover:bg-red-700'>
                                <img src={googleLogo} alt="Google Logo" className='w-8 h-8 inline-block mr-2' />
                                Sign up with Google
                            </button>
                            <button onClick={handleFacebookSignup} className='block bg-blue-800 text-white py-2 px-4 rounded-full flex items-center transition duration-300 hover:bg-blue-900'>
                                <img src={fbLogo} alt="Facebook Logo" className='w-8 h-8 inline-block mr-2' />
                                Sign up with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
