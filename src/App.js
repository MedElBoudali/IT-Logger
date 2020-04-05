import React, { useEffect } from "react";
import Home from "./Pages/Home";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Assets/Style/App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return <Home />;
};

export default App;
