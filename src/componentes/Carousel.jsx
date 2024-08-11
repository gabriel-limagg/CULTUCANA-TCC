import React, { useState, useEffect } from 'react';

import um from '../assets/1.svg';
import dois from '../assets/2.svg';
import tres from '../assets/3.svg';
import quatro from '../assets/4.svg';
import cinco from '../assets/5.svg';
import seis from '../assets/6.svg';
import sete from '../assets/7.svg';
import oito from '../assets/8.svg';
import nove from '../assets/9.svg';

const images = [
  um,
  dois,
  tres,
  quatro,
  cinco,
  seis,
  sete,
  oito,
  nove
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Muda a imagem a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-10">
      <div className="overflow-hidden relative h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full flex justify-center items-center transition-transform duration-700 ease-in-out ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-48"
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="font-lilita absolute top-1/2 left-0 transform -translate-y-1/2 bg-sky-950 text-stone-300 p-2 rounded-lg">
        anterior
      </button>
      <button onClick={nextSlide} className="font-lilita absolute top-1/2 right-0 transform -translate-y-1/2 bg-sky-950 text-stone-300 p-2 rounded-lg">
        proximo
      </button>
    </div>
  );
};

export default Carousel;
