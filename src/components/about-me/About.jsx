import React from "react";
import "../about-me/about-me.css";
import { Icon } from "@iconify/react";
import downloadFill from "@iconify/icons-ri/download-fill";
import perfil from "../../media/perfil-img.png";
const About = () => {
  return (
    <div className="about-container">
      <h2>SOBRE MÍ</h2>
      <div className="info-container">
        <img src={perfil} alt="perfil-img" />
        <div>
          <div>
            <p>
              Mi nombre es Geraldine soy Front-end Developer y Fonoaudióloga. Me
              gusta el trabajo en equipo, soy una persona empática, colaborativa
              y siempre estoy en un continuo proceso de aprendizaje. Actualmente
              busco crecer profesionalmente en un ambiente que me permita seguir
              aprendiendo y poniendo a prueba mis habilidades técnicas y
              personales.{" "}
            </p>
          </div>
          <div className="link-container">
            <Icon icon={downloadFill} />
            <p>DESCARGAR CURRICULUM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
