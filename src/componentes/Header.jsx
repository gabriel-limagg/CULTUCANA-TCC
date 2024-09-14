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
            </header>
        
    );
}

export default Header;