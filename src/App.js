import React from "react";
import Logo from "./Assets/Images/logo.webp";

function App() {
  return (
    <div className="App container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>IT Logger</h1>
      </div>
    </div>
  );
}

export default App;
