import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../Actions/LogActions';
import M from 'materialize-css/dist/js/materialize';
import PropTypes from 'prop-types';

const AddLogModal = ({ tech: { techs }, addLog }) => {
  const [getMessage, setMessage] = useState('');
  const [getTech, setTech] = useState('');
  const [getAttention, setAttention] = useState(false);

  const onSubmit = async () => {
    if (getMessage === '' || getTech === '') {
      M.toast({ html: 'Please Enter Message and Tech' });
    } else {
      // Add New Log
      const Log = {
        message: getMessage,
        attention: getAttention,
        tech: getTech,
        date: new Date()
      };
      addLog(Log);
      setMessage('');
      setTech('');
      setAttention(false);
      M.toast({ html: `New Log Added For: ${getTech}` });
    }
  };

  return (
    <div
      id='add-log-modal'
      className='modal'
      style={{ width: '75%', height: '75%' }}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={getMessage}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={getTech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technicien
              </option>
              {techs !== null &&
                techs.map(tech => (
                  <option
                    value={`${tech.firstName} ${tech.lastName}`}
                    key={
                      tech.id
                    }>{`${tech.firstName} ${tech.lastName}`}</option>
                ))}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={getAttention}
                value={getAttention}
                onChange={() => setAttention(!getAttention)}
              />
              <span>Need Attention</span>
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer' style={{ textAlign: 'center' }}>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green blue btn'>
          Add Log
        </a>
      </div>
    </div>
  );
};

AddLogModal.prototype = {
  addLog: PropTypes.func.isRequired,
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object
};

const mapStateToProps = state => ({ tech: state.tech });

export default connect(mapStateToProps, { addLog })(AddLogModal);
