import React from "react";
import "./footer.css";

import logo from '../../Resources/img/logo.svg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        {/* ================================ */}
        <div className="footer__container__field_logo">
          <a>
            <img src={logo} alt=""></img>
          </a>
        </div>
        {/* ================================ */}
        <div className="footer__container__panel">
          <div className="footer__container__panel_item">
            <h4>Oficina</h4>
            <p>
              Caceres, Extremadura Plaza Mayor Phone: 6312939100 Email:
              3maxburts@gmail.com
            </p>
            <h4>Ciudad de Caceres</h4>
          </div>
          <div className="footer__container__panel_item">
            <h4>Post Recientes</h4>
            <div className="blog_feed">
              <ul>
                <li>Freelancer</li>
                <li>Effective </li>
                <li>Core Element</li>
                <li>Desing</li>
                <li>Common</li>
              </ul>
            </div>
          </div>
          <div className="footer__container__panel_item">
            <h4>Servicios</h4>
            <ul>
              <li>Web Desing</li>
              <li>Web Development</li>
              <li>Company Identity</li>
              <li>Search Engine Optimization</li>
              <li>Social Media</li>
              <li>Otra</li>
              <li>Otra</li>
            </ul>
          </div>
        </div>
        {/* =================================== */}
        <div className="footer__container__copyright">
          <ul>
            <li>Copyright @ 2020</li>
            <li>
              <a href="/">Politica de Pivacidad</a>
            </li>
            <li>
              <a href="/">Terminos</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Soporte</a>
            </li>
                </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
