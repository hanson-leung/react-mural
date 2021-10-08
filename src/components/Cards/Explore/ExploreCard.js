import React, { useState } from "react";

// assets
import CohortIcon from '../../assets/cohort-icon.svg';

// components
import PersonCard from './PersonCard';

import People from '../../assets/people';

const ExploreCard = () => {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "clicked card" : "card"} id="explore-the-cohort">
      <img src={CohortIcon} className="card-icon" onClick={handleToggle}  />
      <div className="card-container">
        <div className="card-title">
          <h2>Explore the Cohort</h2>
          <div className="dropdown-arrow"></div>
        </div>
        <div className="dropdown">
          {
            People ? 

            People.map( (person, index) => {

              return (
                <>
                  <PersonCard data={person} key={index} />
                </>
              )
            })
            
            :

            ''


          }

        </div>
      </div>
    </div>
  )
}

export default ExploreCard;