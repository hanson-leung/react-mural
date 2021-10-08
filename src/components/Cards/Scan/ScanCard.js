import React, { useState } from "react";


import ScanIcon from '../../assets/scan-icon.svg'

import './ScanCard.css'

import Scanner from './Scanner.js';

const ScanCard = () => {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    
    <div className={isActive ? "clicked card inverted" : "card inverted"} id="scan-the-mural">
      <img src={ScanIcon} className="card-icon" onClick={handleToggle} />
      <div className="card-container">
        <div className="card-title">
          <h2>Scan the Mural</h2>
          <div className="dropdown-arrow" id="dropdown-scan"></div>
        </div>
        <div className="dropdown">

          <div id="scan-container">

            <Scanner />

          </div>

        </div>
      </div>
    </div>
  )
}

export default ScanCard;