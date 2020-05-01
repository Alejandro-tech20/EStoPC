import React from "react";
import bgSection1 from "../../Resources/img/bg_services.jpg";
import "./page-services.css";


const Section1 = ()=>{


    return <div className="pg-services-section1" style={{background: `url(${bgSection1})`}}>
        <div className="container-main-text">
            <h1 className="main-text">Web Design</h1>
            <h3 className="seconds-text">services</h3>
        </div>

    </div>
}

export default Section1;