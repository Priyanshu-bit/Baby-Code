import React from 'react'
import F1 from "../assets/drive/F1.png";
import F3 from "../assets/drive/F3.png";
import F2 from "../assets/drive/F2.png";
import F4 from "../assets/drive/F4.png";
import F5 from "../assets/drive/F5.png";
import F6 from "../assets/drive/F6.png";
import F7 from "../assets/drive/F7.png";
import F8 from "../assets/drive/F8.png";

const ImagesGrid = () => {
  return (
    <div  className=''>
       <div className="flex overflow-y-hidden ">
             
              <div className="grid grid-cols-4 gap-6 w-[50%]  mb-20 mt-4 ml-16">
                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F1}
                    alt="Image 1"
                  />
                  <h1 className='ml-2'>Speaking</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F2}
                    alt="Image 2"
                  />
                  <h1 className='ml-2'>Writing</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F4}
                    alt="Image 3"
                  />
                  <h1 className='ml-2'>Listening</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "105%", height: "auto" }}
                    src={F3}
                    alt="Image 4"
                  />
                  <h1 className='ml-2'>Student News </h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F5}
                    alt="Image 5"
                  />
                  <h1 className='ml-2'>Vocabulary</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F7}
                    alt="Image 6"
                  />
                  <h1 className='ml-2'>Book IELTS Exam</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F6}
                    alt="Image 7"
                  />
                  <h1 className='ml-2'>Classes</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F8}
                    alt="Image 8"
                  />
                  <h1 className='ml-2'>Reading</h1>
                </div>
              </div>
              <div>
              <div className='bg-white text-sm text-gray-700 h-12 w-60 p-2 px-4 shadow-md rounded-lg mt-4 ml-12 flex gap-2 mb-4'>
                <img 
                  src="src/assets/drive/yt.png" 
                  alt="yt" 
                  className="w-6 h-6 mt-[2px] ml-8"
                />
                <p className='mt-[2px]'>App Guide Video</p>
              </div>

              <div className='bg-white h-36 w-60 p-4 py-[24px] px-4 shadow-md rounded-lg mt-2 ml-12 grid gap-2'>
                
              <div className='grid ml-[12px]'>
                <h1 className='font-bold mb-2'>Practice mock tests</h1>
                <p className='text-xs mb-4'>Get the authentic IELTS experience with all four modules covered</p>         
                
                <button className='rounded-2xl bg-blue-600 w-44 text-white'>Start</button>
              </div>
              </div>
              </div>

            </div>
    </div>
  )
}

export default ImagesGrid