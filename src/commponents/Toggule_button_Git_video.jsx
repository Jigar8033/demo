import React, { useState } from 'react'


const Toggule_button_Git_video = ({ label, children }) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
      setIsToggled(!isToggled);
    };
  return (
    <>
      <div className="card">
      <div className="card-header align-items-center d-flex">
        <h4 className="card-title mb-0 flex-grow-1">{label}</h4>
        <div className="flex-shrink-0">
          <div className="form-check form-switch form-switch-right form-switch-md">
            <label htmlFor={`${label}-toggle`} className="form-label text-muted">
              Show Code
            </label>
            <input
              className="form-check-input code-switcher"
              type="checkbox"
              id={`${label}-toggle`}
              checked={isToggled}
              onChange={toggle}
            />
          </div>
        </div>
      </div>
      <div className="card-body">
        {isToggled ? children.code : children.preview}
      </div>
    </div>
    </>
  )
}

export default Toggule_button_Git_video
