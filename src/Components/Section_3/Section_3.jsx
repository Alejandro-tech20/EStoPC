import React from "react";
import "./section_3.css";
import "../../styles/main.css";

const Section3 = () => {
  return (
    <div className="relative px-8 box-border
     flex  flex-col justify-center
    items-center 
    ">
      <div className="text-center ">
        <h2>Destacado</h2>
        <p>
          Somos una empresa de <a href="/">diseño de sitios web</a> de Cáceres,
          agencia de
          <a href="/">marketing digital</a>,<a href="/">redes sociales</a> y
          agencia de
          <a href="/">relaciones públicas</a> en una licuadora súper creativa.
          Las licitaciones de nuestra marca y los mixólogos de marketing siempre
          ofrecen diseños únicos de sitios web  con las tecnologías
          modernas actuales, campañas de redes sociales, mejoras de 
          <a href="/">
          SEO 
              </a>  y
          estrategias de marketing que impulsan los ingresos para clientes
          potenciales de ventas y adquisición de clientes. Echa un vistazo a
          nuestros últimos brebajes.
        </p>
      </div>
    </div>
  );
};

export default Section3;
