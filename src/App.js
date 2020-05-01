import React, {useState} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Soluciones from "./Pages/Solutiones";

function App() {
  const [isactive, setActive]= useState(0);
  const choice=(inde)=>{
    setActive(inde);
  }
  return (
    <>
      <BrowserRouter>
        <Header active={1} fu={choice}/>

        {/* Redirection */}
        <Redirect from="/" to="/home" />
        {/* Route */}
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/soluction" component={Soluciones} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
