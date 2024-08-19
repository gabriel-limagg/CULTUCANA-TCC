import React from 'react';
import '../App.css'; 
import { Link } from 'react-scroll';
import Header from './Header';



function Inicio() {
    return (
        <div> 
            <Header /> 
            <div className='hidden md:block'>
            <div className=' text-3xl grid grid-cols-5 gap-4 place-items-center p-6 max-[1500px]:text-2xl max-[1200px]:text-xl '>
                <div >
                    <Link to='apresentacao' smooth={true} duration={500} offset={160}>
                        <h2 className='font-aleo text-stone-300 cursor-pointer '>Apresentação</h2>
                    </Link>
                </div>
                <div>
                    <Link to='guia' smooth={true} duration={500} offset={180}>
                        <h2 className='font-aleo text-stone-300 cursor-pointer'>Guia</h2>
                    </Link>
                </div>
                <div>
                    <Link to='carrossel' smooth={true} duration={500}>
                        <h2 className='font-aleo text-stone-300 cursor-pointer'>Materiais utilizados</h2>
                    </Link>
                </div>
                <div>
                    <h2 className='font-aleo text-stone-300 cursor-pointer'>CANAÃ</h2>
                </div>
                <div>
                    <Link to='discricao' smooth={true} duration={500} offset={200}>
                        <h2 className='font-aleo text-stone-300 cursor-pointer'>Quem somos</h2>
                    </Link>
                </div>
                </div>
                
            </div>
            <div className='max-[426px]:mt-28 max-[426px]:top-96'>
            <h1 className=' font-RedRose text-textColor text-7xl text-center mt-16 max-[1500px]:text-6xl max-[426px]:mb-96 max-[426px]:text-5xl   '>CULTUCANA</h1>
            <div className="cube-loader max-[1500px]:">
                <div className="cube-top"></div>
                <div className="cube-wrapper">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} style={{ '--i': i }} className="cube-span"></span>
                    ))}
                </div>
            </div>
        </div>
        </div>
        
    );
}
export default Inicio;