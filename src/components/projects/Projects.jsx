import React from "react";
import "../projects/projects.css";
import project1 from "../../media/project1.png";
import project2 from "../../media/project2.png";
import project3 from "../../media/project3.png";
import { Icon } from "@iconify/react";
import playCircle from "@iconify/icons-fa-solid/play-circle";
import fileCode from "@iconify/icons-fa-solid/file-code";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>MIS PROYECTOS</h2>
      <div>
        <div>
          <div>
            <img src={project3} alt="project-img" />
          </div>
          <div className="info-project-container">
            <h3>Comida para Todos</h3>
            <p>
              Rediseño de página web de Comida Para Todos. Proyecto realizado en
              conjunto con UX y desarrollado con React.js.
            </p>
            <p>
              <strong>Tecnologías: React.js - CSS.</strong>
            </p>
            <div>
              <button type="button">
                <Icon icon={playCircle} />
                Demo
              </button>
              <button type="button">
                <Icon icon={fileCode} />
                Code
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={project1} alt="project-img" />
          </div>
          <div className="info-project-container">
            <h3>Data Lovers</h3>
            <p>
              Página para visualizar data sobre Harry Potter. Desarrollado
              totalmente con JavaScript, en ella puedes filtrar por distintas
              categorias y buscar por nombre.
            </p>
            <p>
              <strong>Tecnologías: JavaScript - CSS.</strong>
            </p>
            <div>
              <button type="button">
                <Icon icon={playCircle} />
                Demo
              </button>
              <button type="button">
                <Icon icon={fileCode} />
                Code
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={project2} alt="project-img" />
          </div>
          <div className="info-project-container">
            <h3>Art Space</h3>
            <p>
              Red social para personas interesadas en diferentes tipos de arte.
              Puedes autentificarte, registrarte, publicar y comentar post
              gracias a la impementación de firebase.
            </p>
            <p>
              <strong>Tecnologías: JavaScript - CSS - Firebase.</strong>
            </p>
            <div>
              <button type="button">
                <Icon icon={playCircle} />
                Demo
              </button>
              <button type="button">
                <Icon icon={fileCode} />
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
