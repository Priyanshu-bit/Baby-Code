import React from "react";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";

import ImagesGrid from "./ImagesGrid";

const SidePanel = () => {
  return (
    <>
      <div className="flex overflow-hidden bg-gradient-to-b from-blue-600 to-blue-900 h-screen">
        <div className="flex justify-center w-[18%] bg-gradient-to-b from-blue-600 to-blue-900 h-screen overflow-y-hidden">
          <div className="text-white">
          <div className="text-center flex gap-2  text-lg ml-11 mb-4">
              <img src="https://babycode.org/assets/logo.svg" alt="logo" className="h-8 w-8 "/>
              BabyCode</div>
          
            
            <div className="flex flex-col items-center   gap-4">
              <ul className="text-left">
                <li className="my-4 mx-auto cursor-pointer hover:bg-blue-400 px-12 py-[4px] rounded-md flex">
                  <img 
                      src="src/assets/drive/home.png" 
                      alt="home" 
                      className="w-6 h-6 mr-2"
                  /> 
                 Home
                </li>
                <li className="my-4 mx-auto cursor-pointer hover:bg-blue-400 px-12 py-[4px] rounded-md flex">
                  <img 
                      src="src/assets/drive/Users.png" 
                      alt="users" 
                      className="w-6 h-6 mr-2"
                  /> 
                 Community
                </li>
                <li className="my-4 mx-auto cursor-pointer hover:bg-blue-400 px-12 py-[4px] rounded-md flex">
                  <img 
                      src="src/assets/drive/stories.png" 
                      alt="users" 
                      className="w-6 h-6 mr-2"
                  /> 
                 Stories
                </li>
                <li className="my-4 mx-auto cursor-pointer hover:bg-blue-400 px-12 py-[4px] rounded-md flex">
                  <img 
                      src="src/assets/drive/shop.png" 
                      alt="users" 
                      className="w-6 h-6 mr-2"
                  /> 
                 Shop
                </li>
                <li className="my-4 mx-auto cursor-pointer hover:bg-blue-400 px-12 py-[4px] rounded-md flex">
                  <img 
                      src="src/assets/drive/feedback.png" 
                      alt="users" 
                      className="w-6 h-6 mr-2"
                  /> 
                 Feedback
                </li>
              </ul>
            </div>
            <div className="h-[190px] w-48 rounded-xl bg-white p-2  mt-32 px-4 ml-2 shadow-md relative">
              <div className="text-blue-500">
                Explore premium features with ease!
              </div>
              <div className="text-black text-[9px]">
                <ul>
                  <li className="my-2">Unlimited speaking test access</li>
                  <li className="my-2">Unlimited writing test access</li>
                  <li className="my-2">Analyze your answer</li>
                  <li className="my-2">Check Band score</li>
                </ul>
                <div className="text-black font-medium text-[11px] mt-4 flex">Only @299
                <button className="bg-blue-500 w-1/2 ml-20 -mt-2 rounded-l-full absolute py-1 px-2 text-white flex gap-1">
                  
                  Buy Now
                  <img src="src/assets/drive/buy.png" alt="buy" className="h-[20px] w-[20px]"/>
                </button>
               </div>
                
              </div>
            </div>
            <div className="mt-5 text-center flex gap-2 ml-12">
              <img src="src/assets/drive/logout.png" alt="logout" className="h-4 w-4 mt-[6px]"/>
              Logout</div>
          </div>
        </div>

        <div className="w-full">
          <div className="h-10 w-full flex justify-end items-center  bg-white">
            <img src={Frame1}  className ="h-8 mr-24" alt="profile" />
          </div>
          <div className="bg-gray-100 h-full w-full">
            <div className="text-md p-4 px-16 text-lg font-medium ">Your Progress Summary</div>
            <div className="flex gap-8 px-16 relative">
              <img src="src/assets/drive/graph.png" alt="graph" className="h-60 w-[620px] rounded-xl"/>

              <img src={Frame2} className="h-60 w-[280px]"/>
              <div className="absolute ml-[710px] mt-24">
                <p className="text-white text-center leading-tight text-lg font-semibold py-2">One share can save <br/> many lives</p>
                <p className="text-xs text-white text-center pb-2">Your one share can unlock a world <br/> of education for unpriviledged.</p>
                <button className="bg-white px-10 rounded-full py-1 text-xs ml-4">Share App</button>
              </div>
            </div>

          <p className="px-16 pt-4 text-lg font-medium">Prepare with ease</p>
           <ImagesGrid/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;