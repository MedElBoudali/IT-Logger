import React from "react";
import SearchBar from "../Layouts/SearchBar";
import LogsContainer from "../Logs/LogsContainer";
import AddBtn from "../Layouts/AddBtn";

const Home = () => {
  return (
    <div className="App container">
      <SearchBar />
      <AddBtn />
      <LogsContainer />
    </div>
  );
};

export default Home;
