import React, { useState } from "react";

import AboutIcon from "../../assets/about-icon.svg";

const AboutCard = () => {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (

      <div className={isActive ? "clicked card" : "card"} id="about-the-project">
        <img src={AboutIcon} className="card-icon" onClick={handleToggle} />
        <div className="card-container">
          <div className="card-title">
            <h2>About the Project</h2>
            <div className="dropdown-arrow"></div>
          </div>
          <div className="dropdown">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ac dui erat. Phasellus sit amet lacinia leo. Nunc non leo
              convallis, mollis purus eu, porttitor neque. Nam venenatis
              feugiat ligula. Quisque justo risus, ultrices eu tempor ut,
              dignissim quis mi. Suspendisse quis orci finibus, dignissim ex
              quis, feugiat sapien.
            </p>
          </div>
        </div>
      </div>

  )
}

export default AboutCard;