import React from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch(props) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(CurrentTemperatureUnitContext);

  return (
    <>
    <input
        className="header__switch"
        type="checkbox"
        checked={props.isChecked}
        value={currentTemperatureUnit}
        onChange={() => {
          props.handleClick();
          handleToggleSwitchChange();
        }}
        id={`header__switch-new`}
    />
    <label
      className="header__switch-label"
      htmlFor={`header__switch-new`}
    >
      <span className={`header__switch-button`} />
      <div className="header__switch-labels">
        <span className={props.isChecked ? 'header__switch-label-alt' : undefined}>F</span>
        <span className={!props.isChecked ? 'header__switch-label-alt' : undefined}>C</span>
      </div>
    </label>
    </>
  );
}

export default ToggleSwitch;
