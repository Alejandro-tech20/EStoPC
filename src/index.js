import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import Header from "./Components/Header/Header";
import Screen1 from "./Components/Screen1/Screen1";
import Section2 from "./Components/Section_2/Section_2";
import Section3 from "./Components/Section_3/Section_3";
import Section4 from "./Components/Section_4/Section_4";
import Footer from "./Components/Footer/Footer";
import CardBanner from "./Components/Card_banner";

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Screen1/>
    <CardBanner/> 
    <Section2 />
    {/*                       <Section3 />
                                    <Section4 /> */}{" "}
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
