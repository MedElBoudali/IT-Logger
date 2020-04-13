import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../Actions/TechActions";
import TechLogo from "../../Assets/Images/tech.png";
import TechItem from "../Techs/TechItem";
import PropTypes from "prop-types";

const TechListModal = ({ tech: {techs}, getTechs }) => {

  useEffect(() => {
    getTechs();
  }, [getTechs]);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="header center">
          <img src={TechLogo} alt="techLogo" className="logo" /> Technicien List
        </h4>
        <ul className="collection">
          {techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.prototype = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ tech: state.tech });

export default connect(mapStateToProps, { getTechs })(TechListModal);
