import React from "react";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";

import ImagesGrid from "./ImagesGrid";

const SidePanel = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <div className="flex justify-center w-[18%] bg-blue-600 h-screen">
          <div className="text-white">
            <h1 className="text-center mb-4">BabyCode</h1>
            <div className="flex flex-col items-center  py-20 gap-4">
              <ul className="text-left">
                <li className="my-4 mx-auto">Home</li>
                <li className="my-4 mx-auto">Community</li>
                <li className="my-4 mx-auto">Stories</li>
                <li className="my-4 mx-auto">Shop</li>
                <li className="my-4 mx-auto">Feedback</li>
              </ul>
            </div>
            <div className="h-48 w-48 rounded-xl bg-white p-2  shadow-md">
              <div className="text-blue-500">
                Explore premium features with ease!
              </div>
              <div className="text-black text-[0.5rem]">
                <ul>
                  <li className="my-2">Unlimited speaking test access</li>
                  <li className="my-2">Unlimited writing test access</li>
                  <li className="my-2">Analyze your answer</li>
                  <li className="my-2">Check Band score</li>
                </ul>
                <div className="text-black">Only @299 </div>
                <div className="bg-blue-500 w-1/2  ml-24 rounded-full p-1">
                  Buy Now
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">Logout</div>
          </div>
        </div>

        <div className="w-full">
          <div className="h-10 w-full flex justify-end items-center  bg-white">
            <img src={Frame1}  className ="h-8 mr-24" alt="profile" />
          </div>
          <div className="bg-gray-300 h-full w-full">
            <div>Your Progress Summary</div>
            <div className="flex ">
              <img style={{ height: "200px", width: "200px" }} src={Frame2} />

              <img style={{ height: "200px", width: "200px" }} src={Frame2} />
            </div>


           <ImagesGrid/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
