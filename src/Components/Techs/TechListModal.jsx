import React, { useState, useEffect } from "react";
import TechLogo from "../../Assets/Images/tech.png";
import TechItem from "../Techs/TechItem";

const TechListModal = () => {
  const [getTechs, setTechs] = useState([]);
  const [getLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchTechs();
  }, []);

  const fetchTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs", { method: "GET" });
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="header center">
          <img src={TechLogo} alt="techLogo" className="logo" /> Technicien List
        </h4>
        <ul className="collection">
          {!getLoading &&
            getTechs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
