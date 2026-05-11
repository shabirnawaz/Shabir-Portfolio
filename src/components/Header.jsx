import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <header className="items-center p-4 bg-gray-950 text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <nav>
          <div className="bs-container  flex mx-auto justify-between items-center">
            
            <a href="/">
              <div className="logo flex gap-2 items-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center font-black sm:text-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform text-white"
                >
                  SA
                </div>

                <div>
                  <h3 className="sm:text-2xl font-bold text-white">
                    Shabir Afridi
                  </h3>

                  <h5 className="text-sm sm:text-1xl text-blue-600">
                    FrontEnd Devloper
                  </h5>
                </div>
              </div>
            </a>

            {/* desktop menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-5 text-xl">

                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-blue-500 hover:text-white transition"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-blue-500 hover:text-white transition"
                    }
                  >
                    Project
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-blue-500 hover:text-white transition"
                    }
                  >
                    Experience
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-blue-500 hover:text-white transition"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>

              </ul>
            </div>

            {/* mobile button */}
            <button
              className="md:hidden"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

          {/* mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              openMenu ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col gap-5 text-lg bg-[#111827] p-5 rounded-2xl mt-2">

              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "text-blue-500 hover:text-white transition"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/project"
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "text-blue-500 hover:text-white transition"
                  }
                >
                  Project
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/experience"
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "text-blue-500 hover:text-white transition"
                  }
                >
                  Experience
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "text-blue-500 hover:text-white transition"
                  }
                >
                  Contact Us
                </NavLink>
              </li>

            </ul>
          </div>

        </nav>
      </header>
    </div>
  );
}

export default Header;