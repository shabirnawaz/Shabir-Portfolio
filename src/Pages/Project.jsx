import React from "react";
import portpolio from "../images/portpolio.png";
import ketchen from "../images/ketchen.png";
import localgrpth from "../images/local-grpth.png";
import shopping from "../images/shoppping.png";

function Project() {
  return (
    <>
      {/* project section */}
           <section className="experience-container bg-[#020617] mt-20  py-10 sm:py-20">
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
    </>
  );
}

export default Project;
