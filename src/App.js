/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./features/User/Signup";
import { HomePage } from "./features/Home/HomePage";
import { HeaderNav } from "./features/Home/HeaderNav";
import { Login } from "./features/User/Login";
export const AppContext = React.createContext();

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const Districts = [
    "Ancón",
    "Ate",
    "Barranco",
    "Breña",
    "Carabayllo",
    "Chaclacayo",
    "Chorrillos",
    "Cieneguilla",
    "Comas",
    "El Agustino",
    "Independencia",
    "Jesús María",
    "La Molina",
    "La Victoria",
    "Lince",
    "Los Olivos",
    "Lurigancho",
    "Lurín",
    "Magdalena del Mar",
    "Pueblo Libre",
    "Miraflores",
    "Pachacámac",
    "Pucusana",
    "Puente Piedra",
    "Punta Hermosa",
    "Punta Negra",
    "Rímac",
    "San Bartolo",
    "San Borja",
    "San Isidro",
    "San Juan de Lurigancho",
    "San Juan de Miraflores",
    "San Luis",
    "San Martín de Porres",
    "San Miguel",
    "Santa Anita",
    "Santa María del Mar",
    "Santa Rosa",
    "Santiago de Surco",
    "Surquillo",
    "Villa El Salvador",
    "Villa María del Triunfo",
  ];
  const MAIN_COLOR = "rgb(230, 145, 56)";
  return (
    <Router>
      <AppContext.Provider
        value={{ Districts, MAIN_COLOR, showMenu, setShowMenu }}
      >
        <div className="App">
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
