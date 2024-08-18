import React, { useState, useEffect, useRef } from 'react';
import menu from '../assets/menu.png';
import { Link } from 'react-scroll';

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
    <div className='fixed'>
      <img
        className='w-16 -mt-16 cursor-pointer'
        src={menu}
        alt="Menu"
        onClick={Menu}
      />

      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${aberto ? 'block' : 'hidden'}`}
        onClick={Menu}
      />

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 bg-slate-200 transition-transform duration-300 ${aberto ? 'translate-x-0' : '-translate-x-full'} h-screen absolute `}
      >
        <div className='p-8'>
          <h2 className='font-bold'>Menu</h2>
          <div>
            <Link to='apresentacao' smooth={true} duration={500} offset={160}>
              <h2 className='font-aleo text-slate-950 cursor-pointer'>Apresentação</h2>
            </Link>
          </div>
          <div>
            <Link to='guia' smooth={true} duration={500} offset={180}>
              <h2 className='font-aleo text-slate-950 cursor-pointer'>Guia</h2>
            </Link>
          </div>
          <div>
            <Link to='carrossel' smooth={true} duration={500}>
              <h2 className='font-aleo text-slate-950 cursor-pointer'>Materiais utilizados</h2>
            </Link>
          </div>
          <div>
            <h2 className='font-aleo text-slate-950 cursor-pointer'>CANAÃ</h2>
          </div>
          <div>
            <Link to='discricao' smooth={true} duration={500} offset={200}>
              <h2 className='font-aleo text-slate-950 cursor-pointer'>Quem somos</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
