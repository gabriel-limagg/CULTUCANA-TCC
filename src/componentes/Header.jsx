import React, { useState, useEffect } from 'react';
import '../App.css'; 
import { Link } from 'react-scroll';
import Logo from "../assets/logo-tcc.png";
import Hamburguer from './Hamburguer';

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [timer, setTimer] = useState(null);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY === 0) {
                        
                        setShowHeader(true);
                        setIsScrollingUp(false);
                        clearTimeout(timer);
                    } else if (window.scrollY > lastScrollY) {
                       
                        setShowHeader(false);
                        setIsScrollingUp(false);
                        clearTimeout(timer);
                    } else {
                       
                        setShowHeader(true);
                        setIsScrollingUp(true);
                        
                        clearTimeout(timer);
                        setTimer(setTimeout(() => {
                            setShowHeader(false);
                        }, 2000));
                    }
                    setLastScrollY(window.scrollY);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, [lastScrollY, timer]);

    return (
        <div className=''>
        
            <div className={`justify-items-center fixed top-0 left-0 w-screen bg-fundoHeader transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}  `}>
                <Link to='inicio' smooth={true} duration={500} offset={-120}>
                    <img className='w-28 m-auto justify-items-center' src={Logo} alt=""/>
                </Link>
                <div className='md:hidden m-auto'>
                <Hamburguer/>
                </div>
            </div>
            <div className="mt-28 "></div> 
        </div>
    );
}

export default Header;