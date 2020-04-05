import React, { useState, useEffect } from "react";

const LogsContainer = () => {
  const [getLogs, setLogs] = useState([]);
  const [getLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (getLoading) {
    return <h4>Loading ...</h4>;
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!getLoading && getLogs.length === 0 ? (
        <p className="center">No Logs To Show !</p>
      ) : (
        getLogs.map((log) => <li>{log.message}</li>)
      )}
    </ul>
  );
};

export default LogsContainer;
