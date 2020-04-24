import React from "react";
import "./screen.css";
import "../../styles/main.css";
import dos from "../../Resources/img/dos.png"
const Screen1 = () => {
  return (
    <div className="screen1">
      <div className="screen1_center">
        <div className="screen1_center_text">
          <h1 className=" slideInUp ">
            Bienvenido a Soporte Tecnico PC
          </h1>
          <h5 className="slideInleft ">
            Independientemente de si necesita potencia de cómputo,
            almacenamiento para bases de datos, entrega de contenido u otra
            funcionalidad, AWS cuenta con los servicios necesarios para ayudarlo
            a crear aplicaciones sofisticadas con mayor flexibilidad,
            escalabilidad y fiabilidad
          </h5>
        </div>
        <div className="carousel">
          <img src={dos} alt=""></img>
        </div>
        <div className="screen1_scroll_arrows">
          <div className="oo"></div>
        </div>
      </div>
    </div>
  );
};
export default Screen1;
