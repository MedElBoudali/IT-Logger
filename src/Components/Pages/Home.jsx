import React from "react";
import SearchBar from "../Layouts/SearchBar";
import LogsContainer from "../Logs/LogsContainer";


const Home = () => {
  return (
    <div className="App container">
      <SearchBar />
      <LogsContainer />
    </div>
  );
};

export default Home;
