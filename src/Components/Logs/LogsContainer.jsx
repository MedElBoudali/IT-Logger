import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Images/logo.webp";
import LogItem from "./LogItem";
import Preloader from "../Layouts/Preloader";

const LogsContainer = () => {
  const [getLogs, setLogs] = useState([]);
  const [getLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchLogs();
    // eslint-disable-next-line
  }, []);

  const fetchLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (getLoading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="header center">
          <img className="logo" src={Logo} alt="Logo" /> System Logs
        </h4>
      </li>
      {!getLoading && getLogs.length === 0 ? (
        <p className="center">No Logs To Show !</p>
      ) : (
        getLogs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default LogsContainer;
