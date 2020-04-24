import React from "react"
import "./Section_2/section_2.css";
import "../styles/main.css";
import { ArrowForward } from "@material-ui/icons";

const Card_Banner = ()=>{
    return (
        <div className="card_banner_one">
            <div className="content">
                <h2>Especialidades de la casa</h2>
                <p>Esto es una explicacion de todo lo que se puede hacer con un teclado a las 3 de la ma;ana despues de haber comido una buena cena y con un clima mas o menos agradable, sin tanto frio</p>
                <a href="/" className="btn">Leer mas..<ArrowForward/></a>
            </div>
        </div>
    )
}
export default Card_Banner;