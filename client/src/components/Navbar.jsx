import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <div className="flex mt-2">
        <button
          onClick={handleToggle}
          className="absolute bg-[#2530a0] p-2 rounded-full text-white right-2"
        >
          <GiHamburgerMenu />
        </button>
      </div>
      {open && (
        <div className="w-full bg-[#f5f7fa] h-[60%]">
          <div className="flex flex-col items-start justify-center px-2 py-4">
            <div>
              <h1 className="text-lg text-[#2530a0] font-bold">Logo</h1>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
                  to={`/categories`}
                  className="text-md text-[#2530a0] uppercase flex items-center gap-1"
                >
                  Categories <IoIosArrowDown />
                </Link>
                {showDropdown && (
                  <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/categories/category1"
                          className="block px-4 py-2 text-sm text-[#2530a0] hover:bg-gray-100"
                        >
                          Category 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/categories/category2"
                          className="block px-4 py-2 text-sm text-[#2530a0] hover:bg-gray-100"
                        >
                          Category 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/categories/category3"
                          className="block px-4 py-2 text-sm text-[#2530a0] hover:bg-gray-100"
                        >
                          Category 3
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link
                to={`/teach`}
                className="text-md text-[#2530a0] uppercase"
              >
                Teach
              </Link>
              <button className="bg-white border border-[#2530a0] text-[#2530a0] font-semibold rounded-full py-1 px-4 text-sm">
                LOGIN
              </button>
              <button className="bg-[#2530a0] border border-[#2530a0] text-[#ffffff] font-semibold rounded-full py-1 px-4 text-sm">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showDropdown) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDropdown]);

  return (
    <div className={`lg:flex lg:flex-row lg:justify-around lg:items-center lg:mt-4`}>
      <MobileNavbar />
      <div className="hidden lg:flex lg:gap-8 lg:items-center">
        <div>
          <Link to="/" className="text-2xl text-[#2530a0] font-semibold">
            Logo
          </Link>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(!showDropdown)}
        >
          <Link
            to={`/categories`}
            className="text-lg text-[#2530a0] font-medium uppercase flex items-center gap-1"
          >
            Categories 
            {
              !showDropdown ? (<IoIosArrowDown />) : (<IoIosArrowUp />)
            }
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:gap-4">
        <div className="border-r-2 border-r-[#dfe0e2] pr-4">
          <Link className="uppercase text-sm text-[#2530a0]">Teach</Link>
        </div>
        <div>
          <button className="bg-white border border-[#2530a0] text-[#2530a0] font-semibold rounded-full py-1 px-6 text-sm">
            LOGIN
          </button>
        </div>
        <div>
          <button className="bg-[#2530a0] border border-[#2530a0] text-[#ffffff] font-semibold rounded-full py-1 px-6 text-sm">
            SIGNUP
          </button>
        </div>
      </div>
      {showDropdown && (
            <div className="absolute h-[42%] top-14 bg-[#e9efff] shadow-lg rounded-md w-[100vw] px-24">
              <div className="flex flex-row justify-around">
                <div className="flex flex-col mt-4">
                  <ul className="flex flex-col gap-2 text-[#2530a0] font-semibold text-md cursor-pointer">
                    <li className="hover:text-orange-700">Language</li>
                    <li className="hover:text-orange-700">Cooking</li>
                    <li className="hover:text-orange-700">Music</li>
                    <li className="hover:text-orange-700">Art & Craft</li>
                    <li className="hover:text-orange-700">Yoga</li>
                    <li className="hover:text-orange-700">Academic</li>
                    <li className="hover:text-orange-700">Back to roots</li>
                    <li className="hover:text-orange-700">Funteresting</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  {/* <img src="../src/assets/images/navinside.png" className="h-56 w-64"/> */}
                  <img src="https://i.ibb.co/DCQZP7x/navinside.png" className="h-56 w-64"/>
                </div>
              </div>
            </div>
          )}
    </div>
  );
};

export default Navbar;