
import { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate, Link } from "react-router-dom";
import LogoImg from "../../assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/AuthSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [authOpen, setAuthOpen] = useState(false);
  const authRef = useRef(null);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close auth dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (authRef.current && !authRef.current.contains(e.target)) {
        setAuthOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${isScrolled
        ? "sticky top-0 left-0 bg-white shadow-md"
        : "relative bg-white"
        }`}
    >
      <div className="container m-auto px-4">
        <nav className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="w-[100px] md:w-[130px] flex items-center">
            <Link to="/">
              <img src={LogoImg} alt="LOGO" className="w-full h-auto cursor-pointer" />
            </Link>
            {/* <img src={LogoImg} alt="LOGO" className="w-full h-auto" /> */}
          </div>

          {/* Navigation Links + Buttons */}
          <div className="flex items-center gap-3">
            {/* NavLinks */}
            <div
              className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw]
                  ${open ? "left-0" : "left-[-100%]"}
                 top-[100%] px-5 md:py-0 py-5`}
            >

              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative  after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]
                                       after:absolute   ${isActive
                          ? "font-bold text-[#DA352D]   px-5 py-2 rounded-lg shadow-md  "
                          : "text-gray-800"
                        }`
                      }
                      onClick={() => setOpen(false)} // mobile menu close on click
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart */}
            <button className="relative text-2xl text-gray-700 hover:text-[#DA352D] transition md:mr-3">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-[#DA352D] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            

            {/* Auth Dropdown / Profile */}
            <div className="relative" ref={authRef}>
              {user ? (
                <>
                  <button
                    type="button"
                    onClick={() => setAuthOpen(!authOpen)}
                    className="w-10 h-10 rounded-full bg-[#DA352D] text-white font-bold 
                   flex items-center justify-center cursor-pointer"
                  >
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </button>

                  {authOpen && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40 z-10">
                      <p className="block px-4 py-2 text-sm text-gray-600">
                        {user.name}
                      </p>
                      <button
                        onClick={() => {
                          dispatch(logout());
                          navigate("/");
                        }}
                        className="block w-full cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setAuthOpen(!authOpen)}
                    className="cursor-pointer bg-[#DA352D] border-2 border-[#DA352D] font-bold 
                   text-white px-3 py-1.5 rounded-full transition-all duration-200 
                   hover:bg-white hover:text-[#DA352D]"
                  >
                    Sign In/Up
                  </button>

                  {authOpen && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40 z-10">
                      <button
                        onClick={() => {
                          navigate("/signin");
                          setAuthOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          navigate("/signup");
                          setAuthOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>


            {/* Mobile Menu Icon */}
            <div
              className="text-[30px] cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <IoClose /> : <IoMenu />}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

