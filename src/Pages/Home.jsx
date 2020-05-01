import React from "react"

import Screen1 from "../Components/Screen1/Screen1";
import Section2 from "../Components/Section_2/Section_2";
import Section3 from "../Components/Section_3/Section_3";
import Section4 from "../Components/Section_4/Section_4";
import Footer from "../Components/Footer/Footer";
import CardBanner from "../Components/Card_banner";

const Home = ()=>{
    
    return(
        <>
        <Screen1 />
        
       <CardBanner />
        <Section2 />
     
      <Section3 />
     <Section4 />
      <Footer />
        </>
    )
}
export default Home;