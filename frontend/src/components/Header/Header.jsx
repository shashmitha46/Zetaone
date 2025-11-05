import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo3.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find your service",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  let lastScroll = 0;

  const handleStickyHeader = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      // Scrolling down
      setIsScrollingUp(false);
    } else {
      // Scrolling up
      setIsScrollingUp(true);
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);

    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      className={`header flex items-center fixed top-0 left-0 w-full z-50 bg-white-blue shadow-lg transition-transform duration-300 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/*======================= Logo and Name ========================*/}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-11 h-11" />
            <h1 className="text-[30px] font-bold text-primaryColor">ZETAONE</h1>
          </div>

          {/*======================= Menu ========================*/}
          <div className="navigation hidden md:flex" ref={menuRef}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[20px] leading-7 font-[600]"
                        : "text-textColor text-[20px] leading-7 font-[500] hover:text-blue-500"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*======================= nav right ========================*/}
          <div className="flex items-center gap-4">
            {/*=== login button ===*/}
            <Link to="/login">
              <button
                className="bg-blue-500 py-2 px-6 text-white font-[600] h-[44px] flex items-center
                justify-center rounded-[50px]"
              >
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
