import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

// import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaBarsStaggered, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
// import { Link, useNavigate, useOutletContext } from "react-router-dom";

// const LoginNavbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);
//     const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [placeholderIndex, setPlaceholderIndex] = useState(0);
//     const { user } = useOutletContext() || {};
//     const navigate = useNavigate();

//     const navItems = [
//         { link: 'Home', path: '/HomeAfterLogin' },
//         { link: 'About', path: '/about' },
//         { link: 'Shop', path: '/shop' },
//         { link: 'Our Services', path: '/services' },
//         { link: 'Sell Your Book', path: '/admin/dashboard' },
//         { link: 'Blog', path: '/blog' },
//         { link: 'Become a Seller', path: 'https://forms.gle/i9fmDB8hYVGx5Wyw6', external: true },
//     ];

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsSticky(window.scrollY > 100);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         const element = document.documentElement;
//         if (theme === 'dark') {
//             element.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//             document.body.classList.add('dark');
//         } else {
//             element.classList.remove('dark');
//             localStorage.setItem('theme', 'light');
//             document.body.classList.remove('dark');
//         }
//     }, [theme]);

//     const placeholderTexts = [
//         'Search by Books',
//         'Search by Publishers',
//         'Search by Authors',
//         'Search by ISBN',
//         'Search by Genre',
//         'Search by Bestsellers',
//         'Search by New Arrivals',
//         'Search by Classics',
//         'Search by Recommendations',
//         'Search by Language',
//         'Search by Series',
//         'Search by Price Range',
//         'Search by Publication Year',
//     ];

//     const handleSearch = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/all-books?query=${searchQuery}`);
//             if (response.ok) {
//                 const data = await response.json();
//                 setSearchResults(data);
//             } else {
//                 console.error('Error fetching search results:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//         }
//     };

//     const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPlaceholderIndex((prevIndex) =>
//                 prevIndex === placeholderTexts.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [placeholderTexts]);

//     const handleSignInClick = () => navigate('/login');

//     return (
//         <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
//             <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300' : ''}`}>
//                 <div className="flex justify-between items-center">
//                     {/* Logo and Search */}
//                     <div className="flex items-center gap-2">
//                         <Link to="/" className="flex items-center gap-2">
//                             <img
//                                 src="https://www.shutterstock.com/shutterstock/photos/370209572/display_1500/stock-vector-bookstore-bookshop-book-shop-vector-logo-icon-symbol-emblem-sign-370209572.jpg"
//                                 alt="BookShop Logo"
//                                 className="w-16 h-16 rounded-full object-cover hover:scale-110 transition-transform duration-300"
//                             />
//                         </Link>
//                         <div className="flex items-center relative">
//                             <input
//                                 type="search"
//                                 placeholder={placeholderTexts[placeholderIndex]}
//                                 className="py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 text-pink-700 bg-pink-100"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 onKeyUp={handleSearch}
//                             />
//                             <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-700 transition-colors duration-300" />
//                         </div>
//                     </div>

//                     {/* Sign In or User Profile */}
//                     <div className="space-x-4 flex items-center relative">
//                         {user ? (
//                             <div className="relative">
//                                 <img
//                                     src={`http://localhost:5000${user.image || '/default-profile.png'}`}
//                                     alt="Profile"
//                                     className="w-8 h-8 rounded-full cursor-pointer"
//                                     onClick={() => navigate('/profile')} // Example profile click
//                                 />
//                             </div>
//                         ) : (
//                             const handleSignInClick = () => {
//                                 if (user) {
//                                     navigate('/userDashboard'); // Redirect to user dashboard if logged in
//                                 } else {
//                                     navigate('/login'); // Redirect to login page if not logged in
//                                 }
//                             };
                            
//                             // Inside the JSX:
//                             {user ? (
//                                 <button
//                                     className="bg-blue-700 px-6 py-3 text-pink-500 font-medium rounded-full ml-1 hover:bg-blue-400 transition-all ease-in duration-200 flex items-center whitespace-nowrap"
//                                     onClick={handleSignInClick}
//                                 >
//                                     <img
//                                         src="https://www.rokomari.com/static/200/images/svg/user-img.svg"
//                                         alt="User Profile"
//                                         className="w-6 h-6 mr-2"
//                                     />
//                                     Your Profile
//                                 </button>
//                             ) : (
//                                 <button
//                                     className="bg-blue-700 px-6 py-3 text-pink-500 font-medium rounded-full ml-1 hover:bg-blue-400 transition-all ease-in duration-200 flex items-center whitespace-nowrap"
//                                     onClick={handleSignInClick}
//                                 >
//                                     <img
//                                         src="https://www.rokomari.com/static/200/images/svg/user-img.svg"
//                                         alt="User Profile"
//                                         className="w-6 h-6 mr-2"
//                                     />
//                                     Your Profile
//                                 </button>
//                             )}
                            
                               

//                     {/* Theme Toggle and Desktop Navigation */}
//                     <div className="flex items-center space-x-4 ml-4">
//                         <ul className="hidden md:flex space-x-6">
//                             {navItems.map(({ link, path, external }) => (
//                                 <li key={link}>
//                                     {external ? (
//                                         <a href={path} target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-pink-500 hover:text-blue-700">
//                                             {link}
//                                         </a>
//                                     ) : (
//                                         <Link to={path} className="text-base text-pink-500 hover:text-blue-700">
//                                             {link}
//                                         </Link>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* Theme Toggle */}
//                         <button onClick={toggleTheme} className="ml-2">
//                             {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
//                         </button>

//                         {/* Mobile Menu Toggle */}
//                         <button onClick={toggleMenu} className="md:hidden text-blue-700">
//                             {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden bg-white shadow-lg">
//                     <ul className="flex flex-col items-center py-4 space-y-2">
//                         {navItems.map(({ link, path, external }) => (
//                             <li key={link}>
//                                 {external ? (
//                                     <a href={path} target="_blank" rel="noopener noreferrer" className="text-base text-pink-500">
//                                         {link}
//                                     </a>
//                                 ) : (
//                                     <Link to={path} className="text-base text-pink-500">
//                                         {link}
//                                     </Link>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default LoginNavbar;




const LoginNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const { user } = useOutletContext() || {};
    const navigate = useNavigate();

    const navItems = [
        { link: 'Home', path: '/HomeAfterLogin' },
        { link: 'About', path: '/about' },
        { link: 'Shop', path: '/shop' },
        { link: 'Our Services', path: '/services' },
        { link: 'Sell Your Book', path: '/admin/dashboard' },
        { link: 'Blog', path: '/blog' },
        { link: 'Become a Seller', path: 'https://forms.gle/i9fmDB8hYVGx5Wyw6', external: true },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const element = document.documentElement;
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const placeholderTexts = [
        'Search by Books',
        'Search by Publishers',
        'Search by Authors',
        'Search by ISBN',
        'Search by Genre',
        'Search by Bestsellers',
        'Search by New Arrivals',
        'Search by Classics',
        'Search by Recommendations',
        'Search by Language',
        'Search by Series',
        'Search by Price Range',
        'Search by Publication Year',
    ];

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/all-books?query=${searchQuery}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
            } else {
                console.error('Error fetching search results:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) =>
                prevIndex === placeholderTexts.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [placeholderTexts]);

    const handleSignInClick = () => {
        if (user) {
            navigate('/userDashboard'); // Redirect to user dashboard if logged in
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300' : ''}`}>
                <div className="flex justify-between items-center">
                    {/* Logo and Search */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="https://www.shutterstock.com/shutterstock/photos/370209572/display_1500/stock-vector-bookstore-bookshop-book-shop-vector-logo-icon-symbol-emblem-sign-370209572.jpg"
                                alt="BookShop Logo"
                                className="w-16 h-16 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </Link>
                        <div className="flex items-center relative">
                            <input
                                type="search"
                                placeholder={placeholderTexts[placeholderIndex]}
                                className="py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 text-pink-700 bg-pink-100"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyUp={handleSearch}
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-700 transition-colors duration-300" />
                        </div>
                    </div>

                    {/* Sign In or User Profile */}
                    <div className="space-x-4 flex items-center relative">
                        {user ? (
                            <div className="relative">
                                <img
                                    src={`http://localhost:5000${user.image || '/default-profile.png'}`}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                    onClick={() => navigate('/profile')}
                                />
                            </div>
                        ) : (
                            <button
                                className="bg-blue-700 px-6 py-3 text-pink-500 font-medium rounded-full ml-1 hover:bg-blue-400 transition-all ease-in duration-200 flex items-center whitespace-nowrap"
                                onClick={handleSignInClick}
                            >
                                <img
                                    src="https://www.rokomari.com/static/200/images/svg/user-img.svg"
                                    alt="User Profile"
                                    className="w-6 h-6 mr-2"
                                />
                                Your Profile
                            </button>
                        )}
                    </div>

                    {/* Theme Toggle and Desktop Navigation */}
                    <div className="flex items-center space-x-4 ml-4">
                        <ul className="hidden md:flex space-x-6">
                            {navItems.map(({ link, path, external }) => (
                                <li key={link}>
                                    {external ? (
                                        <a href={path} target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-pink-500 hover:text-blue-700">
                                            {link}
                                        </a>
                                    ) : (
                                        <Link to={path} className="text-base text-pink-500 hover:text-blue-700">
                                            {link}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Theme Toggle */}
                        <button onClick={toggleTheme} className="ml-2">
                            {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button onClick={toggleMenu} className="md:hidden text-blue-700">
                            {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col items-center py-4 space-y-2">
                        {navItems.map(({ link, path, external }) => (
                            <li key={link}>
                                {external ? (
                                    <a href={path} target="_blank" rel="noopener noreferrer" className="text-base text-pink-500">
                                        {link}
                                    </a>
                                ) : (
                                    <Link to={path} className="text-base text-pink-500">
                                        {link}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default LoginNavbar;
