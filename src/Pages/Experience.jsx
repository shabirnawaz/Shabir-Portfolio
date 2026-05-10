import React from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiCodeBracket, HiCommandLine } from "react-icons/hi2";

function Experience() {
  return (
    <>
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
     
    </>
  );
}

export default Experience;
