import React, { useState, useEffect } from 'react';
import '../App.css'; // Importe o CSS para a animação
import { Link } from 'react-scroll';
import Logo from "../assets/logo-tcc.png";

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
                        // No topo da página, header visível e não some
                        setShowHeader(true);
                        setIsScrollingUp(false);
                        clearTimeout(timer);
                    } else if (window.scrollY > lastScrollY) {
                        // Rola para baixo - esconde o header
                        setShowHeader(false);
                        setIsScrollingUp(false);
                        clearTimeout(timer);
                    } else {
                        // Rola para cima - mostra o header
                        setShowHeader(true);
                        setIsScrollingUp(true);
                        // Define o timer para esconder o header após 2 segundos, apenas se estiver rolando para cima
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
        <div>
            <div className={`fixed top-0 left-0 w-screen bg-fundoHeader transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
                <Link to='inicio' smooth={true} duration={500} offset={-120}>
                    <img className='w-28 m-auto' src={Logo} alt="" />
                </Link>
            </div>
            <div className="mt-28"></div> {/* Ajuste a margem superior para compensar a altura do header */}
        </div>
    );
}

export default Header;
