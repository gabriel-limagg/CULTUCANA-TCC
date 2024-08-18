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
  const [Atual, setAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAtual((prevIndex) => (prevIndex + 1) % images.length);
    }, 100000); 
    return () => clearInterval(interval);
  }, []);

  const slideAnterior = () => {
    setAtual((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const proximoSlide = () => {
    setAtual((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='px-4 md:px-8'>
      <h1 className='text-textColor font-RedRose pt-20 md:pt-56 text-4xl md:text-7xl text-center mt-8 md:mt-16 mb-28'>
        Materiais Utilizados
      </h1>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative overflow-hidden h-64">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${Atual * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full flex justify-center items-center">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-72 rounded-2xl max-[1500px]:w-64"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 md:px-0">
          <button onClick={slideAnterior} className="text-2xl font-lilita bg-fundoHeader text-stone-300 p-4 rounded-2xl hidden md:block">
            Anterior
          </button>
          <button onClick={proximoSlide} className="text-2xl font-lilita bg-fundoHeader text-stone-300 p-4 rounded-2xl hidden md:block">
            Próximo
          </button>
        </div>
      </div>
      <div className='flex justify-between mt-4 md:hidden'>
        <button onClick={slideAnterior} className="text-2xl font-lilita bg-fundoHeader text-stone-300 p-4 rounded-2xl">
          Anterior
        </button>
        <button onClick={proximoSlide} className="text-2xl font-lilita bg-fundoHeader text-stone-300 p-4 rounded-2xl">
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Carousel;
