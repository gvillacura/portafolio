import React from "react";
import "../abilities/abilities.css";
import { Icon } from "@iconify/react";
import html5Fill from "@iconify/icons-ri/html5-fill";
import css3Icon from "@iconify/icons-simple-icons/css3";
import githubFill from "@iconify/icons-ri/github-fill";
import firebaseIcon from "@iconify/icons-cib/firebase";
import reactjsFill from "@iconify/icons-ri/reactjs-fill";
import nodeIcon from "@iconify-icons/fa-brands/node";
import teamFill from "@iconify/icons-ri/team-fill";
import machineLearningModel from "@iconify/icons-carbon/machine-learning-model";
import arrowCircleRycycle from "@iconify/icons-si-glyph/arrow-circle-rycycle";
import roundSpeakerNotes from "@iconify/icons-ic/round-speaker-notes";
import handshakeIcon from "@iconify/icons-la/handshake";
import languageJavascript from "@iconify/icons-mdi/language-javascript";

const Abilities = () => {
  return (
    <div className="abilities-container" id="habilidades">
      <h2>TECNOLOGÍAS Y HABILIDADES BLANDAS</h2>
      <div>
        <div className="tech-abilities">
          <div>
            <Icon icon={languageJavascript} />
            <p>JavaScript</p>
          </div>
          <div>
            <Icon icon={html5Fill} />
            <p>HTML5</p>
          </div>
          <div>
            <Icon icon={css3Icon} />
            <p>CSS3</p>
          </div>
          <div>
            <Icon icon={githubFill} />
            <p>GitHub</p>
          </div>
          <div>
            <Icon icon={firebaseIcon} />
            <p>Firebase</p>
          </div>
          <div>
            <Icon icon={reactjsFill} />
            <p>React.js</p>
          </div>
          <div>
            <Icon icon={nodeIcon} />
            <p>Node.js</p>
          </div>
        </div>
        <hr></hr>
        <div className="soft-abilities">
          <div>
            <Icon icon={teamFill} />
            <p>Trabajo en equipo</p>
          </div>
          <div>
            <Icon icon={machineLearningModel} />
            <p>Autoaprendizaje</p>
          </div>
          <div>
            <Icon icon={arrowCircleRycycle} />
            <p>Adaptabilidad</p>
          </div>
          <div>
            <Icon icon={roundSpeakerNotes} />
            <p>Comunicación</p>
          </div>
          <div>
            <Icon icon={handshakeIcon} />
            <p>Empatía</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
