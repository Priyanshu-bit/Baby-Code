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
    <div>
       <div className="flex">
             <div className="mt-5">Prepare with ease</div>
              <div className="grid grid-cols-4 gap-4 w-1/2 mt-10    ">
                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F1}
                    alt="Image 1"
                  />
                  <h1>Speaking</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F2}
                    alt="Image 2"
                  />
                  <h1>Writing</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F4}
                    alt="Image 3"
                  />
                  <h1>Listening</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "105%", height: "auto" }}
                    src={F3}
                    alt="Image 4"
                  />
                  <h1>Title 4</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F5}
                    alt="Image 5"
                  />
                  <h1>Title 5</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F7}
                    alt="Image 6"
                  />
                  <h1>Title 6</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F6}
                    alt="Image 7"
                  />
                  <h1>Title 7</h1>
                </div>

                <div>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={F8}
                    alt="Image 8"
                  />
                  <h1>Title 8</h1>
                </div>
              </div>
              <div>
              <div className='  bg-white h-12 w-44 p-2 shadow-md rounded-lg mt-20 ml-12'>
                App Guide Video
              </div>
              <div className='bg-white h-36 w-44 p-2 shadow-md rounded-lg mt-2  ml-12'>
      <div className="">   <h1 className='font-bold'>Practice mock tests</h1>
<p className='text-xs'>         Get the authentic IELTS experience with all four modules covered
</p>         </div>
         <button className='rounded-xl bg-blue-500 w-full   '>Start</button>
              </div>
              </div>

            </div>
    </div>
  )
}

export default ImagesGrid
