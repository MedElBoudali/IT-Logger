import React from "react";
import SearchBar from "../Layouts/SearchBar";
import LogsContainer from "../Logs/LogsContainer";
import Logo from "../../Assets/Images/logo.webp";

const Home = () => {
  return (
    <div className="App container">
      <SearchBar />
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>IT Logger</h1>
      </div>
      <LogsContainer />
    </div>
  );
};

export default Home;
