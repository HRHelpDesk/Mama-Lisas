import React from 'react';
import '../assets/css/ToggleSwitch.css';

const ToggleSwitch = ({ isOn, handleToggle, theVal,theDefVal, defChecked  }) => {
    return (
        <>
          <input
           checked={isOn}
        onChange={handleToggle}
        defaultValue={theDefVal}
        // value={theVal}
        defaultChecked={defChecked}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
          />
          <label
          style={{ background: isOn && '#06D6A0' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
          >
            <span className={`react-switch-button`} />
          </label>
        </>
      );
    };

export default ToggleSwitch;