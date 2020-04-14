import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../Actions/TechActions';
import M from 'materialize-css/dist/js/materialize';
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
  const [getFirstname, setFirstname] = useState('');
  const [getLastname, setLastname] = useState('');

  const onSubmit = () => {
    if (getFirstname === '' || getLastname === '') {
      M.toast({ html: 'Please Enter First Name & Last Name' });
    } else {
      // Add New Tech
      addTech({
        firstName: getFirstname,
        lastName: getLastname
      });
      setFirstname('');
      setLastname('');
      M.toast({ html: `Technician: ${getFirstname} ${getLastname} Added` });
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='Firstname'
              value={getFirstname}
              onChange={e => setFirstname(e.target.value)}
            />
            <label htmlFor='Firstname' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='Lastname'
              value={getLastname}
              onChange={e => setLastname(e.target.value)}
            />
            <label htmlFor='Lastname' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green blue btn'>
          Add Technician
        </a>
      </div>
    </div>
  );
};

AddTechModal.prototype = {
  addTech: PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);
