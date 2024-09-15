import React, { useState, useEffect, useRef } from 'react';
import menu from '../assets/menu.svg';
import { Link } from 'react-router-dom';
import Grama from "../assets/Grama.svg";

export default function Hamburguer() {
  const [aberto, setAberto] = useState(false);
  const menuRef = useRef(null);

  const Menu = () => {
    setAberto(!aberto);
  };

  const clicarFora = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setAberto(false);
    }
  };

  useEffect(() => {
    if (aberto) {
      document.addEventListener('mousedown', clicarFora);
    }
    return () => {
      document.removeEventListener('mousedown', clicarFora);
    };
  }, [aberto]);

  return (
    <div className='absolute '> 
      <img
        className='w-14 ml-5 -mt-16 cursor-pointer'
        src={menu}
        alt="Menu"
        onClick={Menu}
      />

      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${aberto ? 'block' : 'hidden'}`}
        onClick={Menu}
      />

      <div style={{ backgroundImage: `url(${Grama})`, backgroundSize: 'auto', backgroundPosition: 'center'  }}
        ref={menuRef}
        className={`absolute top-0 left-0 bg-white transition-transform duration-300 ${aberto ? 'translate-x-0' : '-translate-x-full'} h-screen z-[9999] p-5`}
      >
        <div>
          <h1 className='font-bold mt-0 text-2xl font-RedRose text-center'>Menu</h1>
          <hr />
          <div className='bg-zinc-400 rounded-lg'>
            <Link to='/apresentacao' >
              <h2 className='font-RedRose text-slate-950 cursor-pointer text-center mt-6 mb-10 m-4'>Apresentação</h2>
            </Link>
          </div>
          <div className='bg-zinc-400 rounded-lg'>
            <Link to='/guia-de-utilizacao'>
              <h2 className='font-RedRose text-slate-950 cursor-pointer text-center mb-10'>Guia</h2>
            </Link>
          </div>
          <div className='bg-zinc-400 rounded-lg'>
            <Link to='/materiais' >
              <h2 className='font-RedRose text-slate-950 cursor-pointer text-center mb-10'>Materiais</h2>
            </Link>
          </div>
          <div className='bg-zinc-400 rounded-lg'>
            <h2 className='font-RedRose text-slate-950 cursor-pointer text-center mb-10'>CANAÃ</h2>
          </div>
          <div className='bg-zinc-400 rounded-lg'>
            <Link to='/quem-somos'>
              <h2 className='font-RedRose text-slate-950 cursor-pointer text-center mb-5'>Quem somos</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
