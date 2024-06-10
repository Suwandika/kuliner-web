import React from "react";
import babiGulingImage from "../assets/babi_guling.jpeg";

const Food = () => {
  return (
    <div id="food" className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 px-4">
        <h2 className="text-xl text-white font-bold mb-2">Babi Guling</h2>
        <div className="bg-[#323443] rounded-[20px]">
          <p className="text-slate-400 mb-4 md:mr-20 ml-3">
            Babi guling, hidangan ikonik dari Bali, memukau dengan kelezatan yang tak tertandingi. Dagingnya lembut, kulitnya renyah, dan rempahnya meresap dalam setiap gigitan. Pengalaman menyantapnya adalah perpaduan sempurna antara tekstur dan rasa yang memikat, menjadikannya pilihan wajib bagi pecinta kuliner yang mencari kenikmatan autentik.
          </p>
          {/* <Link
            to="/screens/DetailFood"
            className="text-blue-500 ml-3 hover:underline"
          >
            Learn More
          </Link> */}
          
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={babiGulingImage}
          alt="Makanan"
          className="w-full md:w-[450px] h-[350px] rounded-[50px] pt-4"
        />
      </div>
    </div>
  );
};

export default Food;
