import React from "react";
import "./Section_2/section_2.css";
import "../styles/main.css";
import { ArrowForward } from "@material-ui/icons";

const Card = (props) => {
  return (
    <div className="card fadeInUp">
      <img src={props.img} alt=""></img>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <a href={props.href}>
        Saber..
        <i>
          <ArrowForward />
        </i>
      </a>
    </div>
  );
};

export default Card;
