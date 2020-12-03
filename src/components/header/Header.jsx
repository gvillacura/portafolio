import React, { useRef } from 'react';
import './header.css';
import { Icon} from '@iconify/react';
import menuLine from '@iconify/icons-ri/menu-line';
import closeFill from '@iconify/icons-ri/close-fill';

const Header = () =>{

    const menu = useRef(null);

    const openMenu = () => {
    menu.current.classList.remove("hide");
    };

    const closeMenu = () => {
    menu.current.classList.add("hide");
    };

    return(
    <header className="header">
        <nav>
            <ul>
                <li href="Sobre-mi">Sobre mi</li>
                <li>Habilidades</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <div className="menu-icon-container" onClick={openMenu}>
            <Icon icon={menuLine} />    
        </div>
        <div ref={menu} className="hide">
            <Icon onClick={closeMenu} icon={closeFill} />
            <nav className="mobile-nav">
                <ul>
                    <li href="Sobre-mi">Sobre mi</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header;