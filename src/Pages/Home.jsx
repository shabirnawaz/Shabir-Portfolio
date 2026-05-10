import React from "react";
import Header from "../components/Header";
import HeroBackground from "../components/HeroBackground";
// import shopping from "../images/shopping";
import shopping from "../images/shoppping.png";
import portpolio from "../images/portpolio.png";
import ketchen from "../images/ketchen.png";
import Shabir1 from "../images/shabir1.jpeg";
import localgrpth from "../images/local-grpth.png";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiCodeBracket, HiCommandLine } from "react-icons/hi2";

function Home() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950">
        {/* Background Animation */}
        <HeroBackground />
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-br from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Shabir Afridi
            </span>
          </h1>

          <h4 className="mt-4 text-2xl sm:text-3xl font-bold md:text-xl text-white ">
            Frontend Developer
          </h4>
          <div className="w-[70%] m-auto">
            <p className="text-white sm:text-2xl mt-6 ">
              I’m a React.js Frontend Developer who loves building clean,
              user-friendly and performance-focused web applications.
            </p>
          </div>

          {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Get Started
          </button> */}
        </div>
        <div className="experience absolute flex gap-5  sm:left-[16%] top-[72%] z-20 p-4">
          <div className="border-r-3 border-white items-center h-14 pr-4">
            <h3 className="text-white sm:text-2xl">1.5+</h3>
            <p className="text-gray-400">Experience</p>
          </div>
          <div className="border-r-3 items-center h-14 pr-4 border-white">
            <h3 className="text-white sm:text-2xl">50+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="">
            <h3 className="text-white sm:text-2xl">7+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </div>
      </section>
      {/* project section */}
      <section className="experience-container bg-[#020617]  py-10 sm:py-20">
        <div className="bs-container container mx-auto  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div>
              <h4 className="text-blue-600 mb-3 tracking-widest text-lg">
                FEATURED WORK
              </h4>
              <h1 className="text-white text-xl mb-5">SELECTED PROJECTS</h1>
            </div>

            {/* Right Column */}
            <div className=" text-white">
              <p className="flex justify-end mb-10">
                A collection of digital products I've helped build from
                conception to deployment.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* card 1 */}
            <div className="flex justify-center mb-2">
              <a href="https://resume-t9jt.vercel.app/" className="w-full">
                <div className="card text-white border-2 border-blue-400 hover:border-blue-500 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  
                  <div className="card_image">
                    <img
                      src={portpolio}
                      alt="portfolio"
                      className="h-48 w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                    />
                  </div>

                  <div className="card_body px-4 py-4 bg-[#090f20] rounded-bl-2xl rounded-br-2xl">

                    <div className="flex gap-2 flex-wrap mb-2 mt-3">
                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        React
                      </span>

                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        Context API
                      </span>

                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        useReducer
                      </span>
                    </div>

                    <h2 className="font-bold mb-2">My Portfolio</h2>

                    <p className="mb-3">
                      Explore my personal projects, web applications, and design work.
                    </p>

                  </div>
                </div>
              </a>
            </div>

            {/* card 2 */}
            <div className="flex justify-center mb-2">
              <a href="https://kitchen-ptoject.vercel.app" className="w-full">
                <div className="card text-white border-2 border-blue-400 hover:border-blue-500 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:-translate-y-2">

                  <div className="card_image">
                    <img
                      src={ketchen}
                      alt="kitchen"
                      className="h-48 w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                    />
                  </div>

                  <div className="card_body px-4 py-4 bg-[#090f20] rounded-bl-2xl rounded-br-2xl">

                    <div className="flex gap-2 flex-wrap mb-2 mt-3">
                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        Tailwind
                      </span>

                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        HTML
                      </span>

                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        Library
                      </span>
                    </div>

                    <h2 className="font-bold mb-2">Kitchen</h2>

                    <p className="mb-3">
                      Modern kitchen setup with smart storage and easy organization.
                    </p>

                  </div>
                </div>
              </a>
            </div>

            {/* card 3 */}
            <div className="flex justify-center mb-2">
              <a
                href="https://shopping-cart-project-taupe-sigma.vercel.app/"
                className="w-full"
              >
                <div className="card text-white border-2 border-blue-400 hover:border-blue-500 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:-translate-y-2">

                  <div className="card_image">
                    <img
                      src={shopping}
                      alt="shopping"
                      className="h-48 w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                    />
                  </div>

                  <div className="card_body px-4 py-4 bg-[#090f20] rounded-bl-2xl rounded-br-2xl">

                    <div className="flex gap-2 flex-wrap mb-2 mt-3">
                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        React
                      </span>

                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        Context API
                      </span>

                      <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                        useReducer
                      </span>
                    </div>

                    <h2 className="font-bold mb-2">Shopping Cart App</h2>

                    <p className="mb-3">
                      Add/remove items with quantity and total price calculation.
                    </p>

                  </div>
                </div>
              </a>
            </div>

            {/* card 4 */}
            <div className="flex justify-center mb-2">
              <div className="card text-white border-2 border-blue-400 hover:border-blue-500 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ">

                <div className="card_image">
                  <img
                    src={localgrpth}
                    alt="localgrpth"
                    className="h-48 w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                  />
                </div>

                <div className="card_body px-4 py-4 bg-[#090f20] rounded-bl-2xl rounded-br-2xl">

                  <div className="flex gap-2 flex-wrap mb-2 mt-3">
                    <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                      React
                    </span>

                    <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                      Context API
                    </span>

                    <span className="bg-blue-500 text-white rounded px-2 py-1 text-sm">
                      useReducer
                    </span>
                  </div>

                  <h2 className="font-bold mb-2">Local Growth</h2>

                  <p className="mb-3">
                    Modern project with responsive UI and clean user experience.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* project section */}
      <section
        data-aos="zoom-out"
        className="bg-[#020611] py-10 sm:py-20 flex flex-col items-center"
      >
        <div className="bs-container container mx-auto">
          <div className="the_journey ">
            <h4 className="text-blue-600 mb-3 text-center tracking-widest text-xl">
              The journey
            </h4>

            <h1 className="text-4xl text-center text-white mb-7">Experience</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 hover:from-purple-900  border-1 border-gray-200  text-black p-6 rounded-2xl shadow-lg w-auto transition-all duration-300 hover:scale-103 hover:-translate-y-1">
              <p className=" font-bold  mb-2 text-white">
                january 2025 Present
              </p>
              <h2 className=" mb-2 text-white">Frontend Devloper</h2>
              <p className="flex items-center  gap-2 text-white">
                <HiBuildingOffice2 />
                <a href="https://friendsitsolutions.com/sfas/">
                  friends it solutions
                </a>
              </p>

              <ul className="list-disc  marker:text-white [&>li]:mb-2">
                <li className="text-white">
                  Worked as a Frontend Developer building responsive and
                  user-friendly interfaces using React.js.
                </li>

                <li className="text-white">
                  Developed reusable UI components with Tailwind CSS and
                  Bootstrap for consistent design across projects.
                </li>

                <li className="text-white mb-2">
                  Integrated APIs, managed application state, and optimized
                  performance to improve user experience.
                </li>
              </ul>
              <div className="journey flex flex-wrap gap-2 justify-end">
                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  html
                </span>
                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  boostrapp
                </span>
                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  tailwand
                </span>
                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  javascript
                </span>
                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  React.js
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br  from-purple-700 to-blue-600 hover:from-purple-900  to-blue-600 border-1 border-gray-200 p-6 rounded-2xl shadow-lg w-auto transition-all duration-300 hover:scale-103 hover:-translate-y-1 ">
              <p className="text-start font-bold  mb-2 text-white">2024</p>
              <h2 className="text-start text-white">Frontend Devloper</h2>
              <p className="flex items-center justify-start gap-2 text-white">
                <HiBuildingOffice2 />
                <a href="https://thesmartobject.com/">The Smart Object</a>
              </p>

              <ul
                className="list-disc text-start marker:text-white [&>li]:mb-"
                dir="ltr"
              >
                <li className="text-white">
                  Learned and practiced core frontend technologies: HTML, CSS,
                  Bootstrap, and JavaScript.
                </li>

                <li className="text-white">
                  Built responsive web pages and layouts during internship at
                  The Smart Object.
                </li>

                <li className="text-white mb-[52px]">
                  Gained hands-on experience in creating interactive UI
                  components and improving web design skills.
                </li>
              </ul>
              <div className="journey flex flex-wrap gap-2 justify-start">
                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  html
                </span>
                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  boostrapp
                </span>

                <span class="badge   bg-blue-500 rounded p-0.5 px-1 text-white">
                  javascript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skill section */}
      <section className="bg-[#020617] py-10 sm:py-20 flex flex-col items-center">
        <div className="bs-container container mx-auto">
          <div className="the_journey text-center mb-12">
            <h4 className="text-blue-600 mb-3 tracking-widest text-xl">
              What I’ve Learned
            </h4>
            <h1 className="text-4xl text-white mb-7">Frontend Skills</h1>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HTML */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6  hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 bg-red-500 group-hover:opacity-40" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-red-400">
                    <HiCodeBracket className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    HTML
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">HTML5</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Semantic markup, forms, tables, and structured content.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Expertise</span>
                    <span>95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full">
                    <div className="h-full w-[95%] bg-red-400 rounded-full shadow-[0_0_10px_#f87171]" />
                  </div>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6  hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 bg-blue-500 group-hover:opacity-40" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                    <HiCodeBracket className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    CSS
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CSS3</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Flexbox, Grid, animations, and responsive styling.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Expertise</span>
                    <span>90%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full">
                    <div className="h-full w-[90%] bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6  hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 bg-purple-500 group-hover:opacity-40" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-purple-400">
                    <HiCodeBracket className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    Bootstrap
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Bootstrap 5</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Responsive grid system and prebuilt components.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Expertise</span>
                    <span>85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full">
                    <div className="h-full w-[85%] bg-purple-400 rounded-full shadow-[0_0_10px_#a78bfa]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tailwind */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6  hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 bg-emerald-500 group-hover:opacity-40" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                    <HiCodeBracket className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    Tailwind
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Tailwind CSS</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Utility-first styling and rapid UI development.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Expertise</span>
                    <span>90%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full">
                    <div className="h-full w-[90%] bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
                  </div>
                </div>
              </div>
            </div>

            {/* React */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6  hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 bg-sky-500 group-hover:opacity-40" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-sky-400">
                    <HiCodeBracket className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    React
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">React.js</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Component-based architecture for dynamic UIs.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Expertise</span>
                    <span>95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full">
                    <div className="h-full w-[95%] bg-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]" />
                  </div>
                </div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6  hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 bg-yellow-500 group-hover:opacity-40" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-yellow-400">
                    <HiCodeBracket className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    JS
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">JavaScript</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Dynamic behavior, DOM manipulation & ES6+ features.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Expertise</span>
                    <span>95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full">
                    <div className="h-full w-[95%] bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about me */}
      <section className="experience-container bg-[#020617]  py-10 sm:py-20">
        <div class="max-w-6xl bs-container w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* <!-- Left Side: Image with decorative elements --> */}
          <div class="lg:col-span-5 relative group">
            <div class="absolute -inset-4 bg-orange-500/10 rounded-3xl -rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
            <div class="absolute -inset-4 border border-orange-500/20 rounded-3xl rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>

            <div class="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-zinc-200">
              <img
                src={Shabir1}
                alt="Shabir Afridi"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerpolicy="no-referrer"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* <!-- Floating Badge --> */}
            <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 hidden md:block transition-all">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white">
                  {/* <!-- Icon --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-check-circle"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Experience
                  </p>
                  <p class="text-sm font-bold text-zinc-900">Frontend Expert</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Side: Content --> */}
          <div class="lg:col-span-7 space-y-8">
            <div class="space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 text-white rounded-full bg-gradient-to-br from-blue-600 to-purple-700 text-sm font-bold tracking-wide uppercase">
                <span class="w-2 h-2 rounded-full   animate-pulse"></span>
                About Me
              </div>

              <h1 class=" text-2xl sm:text-6xl font-bold text-white tracking-tight">
                Hi, I'm <span class="text-blue-600">Shabir Afridi</span>
              </h1>

              <div class="space-y-4 text-lg text-white leading-relaxed max-w-2xl">
                <p>
                  I’m a passionate{" "}
                  <span class="text-blue-500 font-semibold">
                    Frontend Developer
                  </span>{" "}
                  with a strong focus on creating clean, modern, and
                  user-friendly web interfaces. I specialize in building
                  responsive websites that work smoothly across all devices.
                </p>
                <p>
                  I have hands-on experience with HTML, CSS, JavaScript,
                  React.js, Bootstrap, and Tailwind CSS. I enjoy transforming
                  ideas and designs into real, functional web applications with
                  attention to detail and performance.
                </p>
                <p>
                  My goal is to deliver high-quality frontend solutions that not
                  only look great but also provide an excellent user experience.
                  I am always eager to learn new technologies and improve my
                  skills to stay updated with modern web development trends.
                </p>
              </div>
            </div>

            {/* <!-- Skills Grid --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all group">
                <div class="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br from-blue-600 to-purple-700 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-check-circle"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <span class="text-zinc-700 font-medium">
                  Frontend Web Development
                </span>
              </div>

              <div class="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all group">
                <div class="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br from-blue-600 to-purple-700 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-check-circle"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <span class="text-zinc-700 font-medium">
                  Responsive Website Design
                </span>
              </div>

              <div class="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all group">
                <div class="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br from-blue-600 to-purple-700 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-check-circle"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <span class="text-zinc-700 font-medium">
                  React.js Single Page Applications
                </span>
              </div>

              <div class="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all group">
                <div class="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br from-blue-600 to-purple-700 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-check-circle"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <span class="text-zinc-700 font-medium">
                  UI / UX Focused Layouts
                </span>
              </div>

              <div class="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all group">
                <div class="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br from-blue-600 to-purple-700 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-check-circle"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <span class="text-zinc-700 font-medium">
                  Clean & Maintainable Code
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                class="inline-flex items-center gap-2 text-white bg-gradient-to-br from-purple-700 to-blue-600  px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-500/25 hover:from-blue-600 hover:to-purple-700 transition-all transform  hover:scale-105 active:scale-95"
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-arrow-right"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:hello@shabir.dev"
                class="inline-flex items-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-50 transition-all transform hover:scale-105 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-mail"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
