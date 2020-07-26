import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./features/Users/Signup";
import { HomePage } from "./features/Home/HomePage";
import { HeaderNav } from "./features/Home/HeaderNav";

export const AppContext = React.createContext();
function App() {
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
      <AppContext.Provider value={{ Districts, MAIN_COLOR }}>
        <HeaderNav />
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
