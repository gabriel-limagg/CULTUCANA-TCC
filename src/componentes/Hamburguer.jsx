import React, { useState, useEffect, useRef } from 'react';
import menu from '../assets/menu.png';
import { Link } from 'react-scroll';

export default function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para fechar o menu quando clicar fora
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Adiciona o event listener para detectar cliques fora do menu
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='fixed'>
      {/* Botão do menu hambúrguer */}
      <img
        className='w-16 -mt-16 cursor-pointer'
        src={menu}
        alt="Menu"
        onClick={toggleMenu}
      />

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleMenu} // Fecha o menu ao clicar no overlay
        style={{ zIndex: 999 }}
      />

      {/* Painel do menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0  bg-slate-200 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-screen mt-14`}
        style={{ zIndex: 1000 }}
      >
        <div className='p-8'>
            <div>
            <h2 className='font-bold'>menu</h2>
            </div>
                <div >
                    <Link to='apresentacao' smooth={true} duration={500} offset={160}>
                        <h2 className='font-aleo text-slate-950 cursor-pointer '>Apresentação</h2>
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
