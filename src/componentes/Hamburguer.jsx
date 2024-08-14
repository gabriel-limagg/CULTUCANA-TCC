import React, { useState, useEffect, useRef } from 'react';
import menu from '../assets/menu.png';

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
    <div>
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
        className={`fixed top-0 left-0  bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-1/4`}
        style={{ zIndex: 1000 }}
      >
        {/* Conteúdo do menu */}
        <h2>palmeiras n tem mundial</h2>
      </div>
    </div>
  );
}
