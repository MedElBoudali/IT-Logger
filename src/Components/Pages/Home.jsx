import React from "react";
import SearchBar from "../Layouts/SearchBar";
import LogsContainer from "../Logs/LogsContainer";
import AddBtn from "../Layouts/AddBtn";
import AddModalLog from "../Logs/AddLogModal";
import EditModalLog from "../Logs/EditLogModal";
import AddTechModal from "../Techs/AddTechModal";
import TechListModal from "../Techs/TechListModal";

const Home = () => {
  return (
    <div className="App container">
      <SearchBar />
      <AddBtn />
      <AddModalLog />
      <EditModalLog />
      <AddTechModal />
      <TechListModal />
      <LogsContainer />
    </div>
  );
};

export default Home;
