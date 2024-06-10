import React from "react";
import Slider from "react-slick";
import { Link as ScrollLink } from 'react-scroll';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import image1 from "../assets/babi_guling.jpeg";
import image2 from "../assets/arak.jpg";

const Section = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    
  };

  return (
    <div style={{ height: "80vh" }}>
      <Slider {...settings}>
        <div key={1} className="h-screen relative">
          <img
            src={image1}
            alt="Babi Guling"
            className="absolute inset-0 object-cover w-full h-auto border border-gray-300 rounded-lg"
            style={{ maxHeight: "80vh" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-cyan-500 text-transparent bg-clip-text">
                Babi Guling
              </h2>
              <p className="pb-4">
              Babi guling adalah hidangan khas Bali yang terdiri dari daging babi yang dipanggang dengan rempah-rempah khas Bali
                <br />
                menawarkan kombinasi kulit yang renyah dan daging yang lembut dalam setiap suapannya. 
              </p>
              <ScrollLink
                to="food"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-block bg-white text-black px-6 py-3 rounded-full uppercase font-semibold tracking-wider hover:bg-black hover:text-white"
              >
                Explore
              </ScrollLink>
            </div>
          </div>
        </div>
        <div key={2} className="h-screen relative">
          <img
            src={image2}
            alt="Kopi Bali"
            className="absolute inset-0 object-cover w-full h-auto border border-gray-300 rounded-lg"
            style={{ maxHeight: "80vh" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-cyan-500 text-transparent bg-clip-text">
                Arak Bali
              </h2>
              <p className="pb-4">
                Arak Bali adalah minuman keras tradisional dari Bali yang dibuat dari fermentasi nira kelapa atau sari buah.
                <br />
                Arak Bali adalah minuman keras tradisional dari Bali yang memiliki cita rasa khas dan sering dihidangkan dalam acara-acara adat atau upacara keagamaan.
              </p>
              <ScrollLink
                to="drink"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-block bg-white text-black px-6 py-3 rounded-full uppercase font-semibold tracking-wider hover:bg-black hover:text-white"
              >
                Explore
              </ScrollLink>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Section;
