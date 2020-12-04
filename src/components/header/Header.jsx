import React, { useRef } from "react";
//import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./header.css";
import { Icon } from "@iconify/react";
import menuLine from "@iconify/icons-ri/menu-line";
import closeFill from "@iconify/icons-ri/close-fill";

const Header = () => {
  const menu = useRef(null);

  const openMenu = () => {
    menu.current.classList.remove("hide");
  };

  const closeMenu = () => {
    menu.current.classList.add("hide");
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="sobre-mi"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Sobre mi
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="habilidades"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Habilidades
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="proyectos"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contacto
            </Link>
          </li>
        </ul>
        <div className="scrolling-buttons"></div>
      </nav>
      <div className="menu-icon-container" onClick={openMenu}>
        <Icon icon={menuLine} />
      </div>
      <div ref={menu} className="hide">
        <Icon onClick={closeMenu} icon={closeFill} />
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                to="sobre-mi"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Sobre mi{" "}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to="habilidades"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Habilidades{" "}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to="proyectos"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Proyectos{" "}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to="contacto"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contacto{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
