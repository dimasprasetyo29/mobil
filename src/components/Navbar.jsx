import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate if you want to handle navigation programmatically

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate(); // Use this to navigate programmatically

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleLoginClick = () => {
    // Navigate to the login page when the button is clicked
    navigate("/login"); // Assuming you have a /login route
  };

  return (
    <header className="fixed w-full z-10 bg-gradient-to-r from-black via-purple-700 to-black text-white py-4 shadow-md">
      {/* Bagian Navigasi Desktop */}
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          {/* Logo dengan Ikon */}
          <GiSteeringWheel size={35} className="text-primary" />
          <Link to="/" className="font-bold text-2xl">
            AutoNation
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-lg">
          {/* Link Navigasi */}
          <Link
            to="/"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            about car
          </Link>
          <Link
            to="/cars"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            dealer car
          </Link>
          <Link
            to="/services"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            customer services
          </Link>

          <button
            onClick={handleLoginClick} // Attach the onClick handler
            className="hidden lg:flex border-2 border-primary text-lg px-5 py-2 rounded-md hover:bg-primary hover:text-white transition duration-200 ease-linear"
          >
            login
          </button>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* Bagian Navigasi Responsif */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-gradient-to-r from-black via-purple-700 to-black text-white left-0 top-16 font-medium text-xl text-center pt-8 pb-4 gap-6 w-3/4 h-fit rounded-br-xl shadow-lg transition-transform duration-300`}
      >
        <Link
          to="/"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          home
        </Link>
        <Link
          to="/about"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          about car
        </Link>
        <Link
          to="/cars"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          dealer cars
        </Link>
        <Link
          to="/services"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          customer services
        </Link>
        <div>
          <a
            href="/login"
            className="border-2 border-primary py-2 px-5 rounded-md text-center inline-block hover:bg-primary hover:text-white transition duration-200 ease-linear"
          >
            login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;