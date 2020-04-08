import React from "react";
import SearchBar from "../Layouts/SearchBar";
import LogsContainer from "../Logs/LogsContainer";
import AddBtn from "../Layouts/AddBtn";
import AddModalLog from "../Logs/AddLogModal";

const Home = () => {
  return (
    <div className="App container">
      <SearchBar />
      <AddBtn />
      <AddModalLog />
      <LogsContainer />
    </div>
  );
};

export default Home;
