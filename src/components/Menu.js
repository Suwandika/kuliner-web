import React from 'react';
import VideoSource from "../assets/minuman.mp4";
import VideoSource0 from "../assets/makanan.mp4";
import Drink from "./Drink";
import Food from "./Food";

const Menu = () => {
  return (
    <div id='menu' className=' md:px-[100px] px-[30px] w-full bg-black-2 flex flex-col'>
      <div>
        <hr className='bg-[#4D4D4D] border-none h-[0px] ' />
          <Food />
          <div style={{ margin: "0 auto", maxWidth: "70%" }}>
            <video
              controls
              className="mt-4 ml-3 rounded-[20px]"
              style={{ width: "100%" }}
            >
              <source src={VideoSource0} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        <hr className='bg-[#4D4D4D] border-none h-[0px] my-5' />
          <Drink />
          <div style={{ margin: "0 auto", maxWidth: "70%" }}>
            <video
              controls
              className="mt-4 ml-3 rounded-[20px]"
              style={{ width: "100%" }}
            >
              <source src={VideoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
      </div>
    </div>
  )
}

export default Menu;
