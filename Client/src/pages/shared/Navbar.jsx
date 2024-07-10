import CartDetails from "./CartDetails";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [state, setState] = useState({ cartData: [] }); // Placeholder state for cart data

    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Navigation items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Our Services", path: "/services" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
        { link: "Become a Seller", path: "https://forms.gle/i9fmDB8hYVGx5Wyw6", external: true }, // New item
    ];

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Effect of handling sticky behavior
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Effect to handle theme change
    useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    // Placeholder texts for search input
    const placeholderTexts = [
        "Search by Books",
        "Search by Publishers",
        "Search by Authors",
        "Search by ISBN",
        "Search by Genre",
        "Search by Bestsellers",
        "Search by New Arrivals",
        "Search by Classics",
        "Search by Recommendations",
        "Search by Language",
        "Search by Series",
        "Search by Price Range",
        "Search by Publication Year"
    ];

    // Handle search function
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/all-books?query=${searchQuery}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
                console.log("Search Results:", data);
            } else {
                console.error("Error fetching search results:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Function to update placeholder text with typing effect
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) =>
                prevIndex === placeholderTexts.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change placeholder every 5 seconds

        return () => clearInterval(interval);
    }, [placeholderTexts]);

    // Handle cart show function
    const handleCartShow = () => {
        if (state.cartData.length > 0) {
            setShowCart(true);
        } else {
            setShowCart(false);
        }
    };

    // Handle sign in button click
    const handleSignInClick = () => {
        navigate("/login");
    };

    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className="flex justify-between items-center">
                    {/* Logo and Search */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img 
                                src="https://www.shutterstock.com/shutterstock/photos/370209572/display_1500/stock-vector-bookstore-bookshop-book-shop-vector-logo-icon-symbol-emblem-sign-370209572.jpg" 
                                alt="BookShop Logo" 
                                className="w-16 h-16 rounded-full object-cover hover:scale-110 transition-transform duration-300" 
                                style={{ borderRadius: "50%", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                            />
                        </Link>
                        <div className="flex items-center relative">
                            <input
                                type="search"
                                placeholder={placeholderTexts[placeholderIndex]}
                                className="py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 text-pink-700 bg-pink-100"
                                style={{ minWidth: "200px" }} // Set minimum width for input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-700 transition-colors duration-300" />
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button
                        className="bg--700 px-6 py-3 text-pink-500 font-medium rounded-full ml-1 hover:bg-blue-400 transition-all ease-in duration-200 flex items-center whitespace-nowrap"
                        onClick={handleSignInClick}
                    >
                        <img src="https://www.rokomari.com/static/200/images/svg/user-img.svg" alt="Sign In" className="w-6 h-6 mr-2" />
                        Sign In
                    </button>

                    {/* Theme Toggle and Desktop Navigation */}
                    <div className="flex items-center space-x-4 ml-4">
                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex space-x-6 whitespace-nowrap">
                            {navItems.map(({ link, path, external }) => (
                                <li key={link} className="group flex-shrink-0">
                                    {external ? (
                                        <a
                                            href={path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-base cursor-pointer uppercase text-pink-500 hover:text-blue-700 underline italic"
                                        >
                                            <img 
                                                src="https://c8.alamy.com/comp/R1T9CB/shop-vector-icon-isolated-on-transparent-background-shop-transparency-logo-concept-R1T9CB.jpg"
                                                alt="Become a Seller"
                                                className="w-8 h-8 inline-block mr-2 rounded-full object-cover   bg-zinc-800  "
                                            />
                                            <span className="hidden md:inline-block">Become a Seller</span>
                                        </a>
                                    ) : (
                                        <Link to={path} className="text-base cursor-pointer uppercase text-violet-600 hover:text--700 underline italic hover:text-pink-600 transition duration-200">
                                            {link}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Theme Toggle */}
                        <button onClick={toggleTheme} className="text-black focus:outline-none ml-2">
                            {theme === "dark" ? (
                                <FaSun className="w-6 h-6" />
                            ) : (
                                <FaMoon className="w-6 h-6" />
                            )}
                        </button>

                        {/* Cart Icon */}
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="/cartDetails"
                            onClick={handleCartShow}
                        >
                            <MdOutlineShoppingCart className="w-6 h-6" />
                            {state.cartData.length > 0 && (
                                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                                    {state.cartData.length}
                                </span>
                            )}
                        </a>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="outline-none mobile-menu-button"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? (
                                    <FaXmark className="w-6 h-6" />
                                ) : (
                                    <FaBarsStaggered className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden transition-all duration-300 ease-in-out absolute top-0 left-0 w-full bg-transparent">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {navItems.map(({ link, path, external }) => (
                            <li key={link}>
                                {external ? (
                                    <a
                                        href={path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base cursor-pointer uppercase text-pink-500 hover:text-blue-700 transition duration-200"
                                    >
                                        <img 
                                            src="https://c8.alamy.com/comp/R1T9CB/shop-vector-icon-isolated-on-transparent-background-shop-transparency-logo-concept-R1T9CB.jpg"
                                            alt="Become a Seller"
                                            className="w-6 h-6 inline-block mr-2 rounded-full object-cover bg-zinc-800"
                                        />
                                        <span>Become a Seller</span>
                                    </a>
                                ) : (
                                    <Link
                                        to={path}
                                        className="text-base cursor-pointer uppercase text-pink-500 hover:text-blue-700 transition duration-200"
                                    >
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

export default Navbar;

