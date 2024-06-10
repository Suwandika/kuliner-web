import React from "react";
import KopiAjaImage from "../assets/arak.jpg";

const Drink = () => {
  return (
    <div id="drink" className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={KopiAjaImage}
          alt="Minuman"
          className="w-full md:w-[450px] h-[350px] rounded-[50px] pt-4 md:pt-0"
        />
      </div>
      <div className="md:w-1/2 px-4">
        <h2 className="text-xl font-bold mb-2 text-white">Arak Bali</h2>
        <div className="bg-[#323443] rounded-[20px]">
          <p className="text-slate-400 mb-4 md:mr-20 ml-3">
            Arak Bali adalah minuman tradisional yang khas dan memikat dari Pulau Dewata. Minuman ini memiliki cita rasa yang kuat dengan sentuhan unik dari bahan-bahan lokal. Arak Bali memukau dengan keharumannya yang khas dan memiliki karakteristik yang berbeda dari minuman keras lainnya. Dengan rasa yang kuat namun halus, Arak Bali adalah pilihan yang sempurna untuk menikmati kekayaan budaya Bali dalam satu gelas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drink;
