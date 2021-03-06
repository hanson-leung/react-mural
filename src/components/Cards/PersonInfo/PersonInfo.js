import React, { useState, useEffect } from "react";

import People from '../../assets/people';

import IYH from '../../assets/iyh.jpg'

import './PersonInfo.css';

const PersonInfo = (props) => {

  const [user, setUser] = useState(null);

  const [imgPath, setImgPath] = useState(null);


  useEffect(() => {
    if (props.modalIsOpen) {

      let parsedScan = props.scan.toLowerCase();
      parsedScan = parsedScan.includes(' ') ? parsedScan.replace(/\s/g, '-') : parsedScan;
  
      const text = parsedScan;
      nameToPerson(text);
    }
  })

  const nameToPerson = (text) => {
    for (let i = 0; i < People.length; i++) {
      let nameToMatch = People[i].name.replace(/\s/g, '-').toLowerCase();
      if (text === nameToMatch) {
        setUser(People[i]);
      }
    }
  }

  useEffect( () => {
    if (user) {
      const lastIndex = user.name.lastIndexOf(" ");
      const imagePath = user.name.toLowerCase().substring(0, lastIndex);
      setImgPath(imagePath);
    }
  })



  return (
    <div className="card-person-container">

      {
        user ?
          <>
            <img id="card-img" src={process.env.PUBLIC_URL + '/headshots/' + imgPath + '.jpg'} className="headshot" />
            <h1 className="card-name">{user.name}</h1>
            <p className="card-bio">{user.bio}</p>
          </>
        :
          ''
      }
      
    </div>
  )
}

export default PersonInfo