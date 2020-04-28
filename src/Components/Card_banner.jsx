import React from "react";
// import "./Section_2/section_2.css";
import { ArrowForward } from "@material-ui/icons";
import "../Components/Header/header.css";

const Card_Banner = () => {
  return (
    <div className="card_banner_one">
      <div className="content2">
        <div>
          <h2>Por que Elegirnos</h2>
          <p>
           Somos un equipo de profesionales que ofrecemos un servicio de calidad e innovador para tu negocio, logramos implementar las ideas y procesos que le aporten mas valor agregado a su producto o servicio.
           En EpicBurst trabajamos para usted.
          </p>
          <button>
            Leer mas..
            <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card_Banner;
