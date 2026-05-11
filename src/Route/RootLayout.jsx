import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Header from "../components/Header";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function RootLayout() {
  return (
    <>
      <Header />

      <div>
        {/* <div className="top-header">linkdin , fb,ghithub --right number email </div> */}

        <main>
          <Outlet />
          <footer className="bg-gray-900 text-gray-300 py-8 ">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left */}
              <p className="text-sm">
                © {new Date().getFullYear()} Shabir Afridi. All rights reserved.
              </p>

            
              {/* Right - Social Icons */}
              <div className="flex gap-5 text-xl">
                <a
                  href="https://www.instagram.com/shabiro50/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/shabirafridi/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/shabirnawaz"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-300 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/shabir.afridi.629597/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default RootLayout;
