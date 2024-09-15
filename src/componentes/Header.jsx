import '../App.css'; 
import Logo from "../assets/logo-tcc.png";
import Hamburguer from './Hamburguer';
import { Link } from 'react-router-dom';


function Header() {
   
    return (
       <header>
        
            <div className="justify-items-center relative m-0 p-0 top-0 left-0 bg-fundoHeader ">
                    <Link to='/'>
                    <img className='w-28 m-auto justify-items-center cursor-pointer' src={Logo} alt=""/>
                    </Link>
                <div className='md:hidden m-auto'>
                <Hamburguer/>
                </div>
              
            </div>
            <div className="mt-9"></div> 
            <div className=' text-3xl grid grid-cols-5 gap-4 place-items-center   max-[1500px]:text-2xl max-[1200px]:text-xl '>
                <div >
                    <Link to='apresentacao' >
                        <h2 className='font-aleo text-stone-300 cursor-pointer '>Apresentação</h2>
                    </Link>
                </div>
                <div>
                    <Link to='guia de ultilizaçao' >
                        <h2 className='font-aleo text-stone-300 cursor-pointer'>Guia</h2>
                    </Link>
                </div>
                <div>
                    <Link to='materiais' >
                        <h2 className='font-aleo text-stone-300 cursor-pointer'>Materiais utilizados</h2>
                    </Link>
                </div>
                <div>
                    <h2 className='font-aleo text-stone-300 cursor-pointer'>CANAÃ</h2>
                </div>
                <div>
                    <Link to='quem somos' smooth={true} duration={500} offset={200}>
                        <h2 className='font-aleo text-stone-300 cursor-pointer'>Quem somos</h2>
                    </Link>
                </div>
                </div>
            </header>
        
    );
}

export default Header;