import React, { useState, useEffect } from "react";

import PersonInfo from "../PersonInfo/PersonInfo";

import Modal from "react-modal";

const PersonCard = (props) => {
  const person = props.data;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const lastIndex = person.name.lastIndexOf(" ");
  const imagePath = person.name.toLowerCase().substring(0, lastIndex);

  return person ? (
    <div className="personSection">
      <Modal isOpen={modalIsOpen} isScan={false} id="scan-modal">
        <button
          className="back-button"
          onClick={setModalIsOpenToFalse}
        ></button>
        <PersonInfo scan={person.name} modalIsOpen={modalIsOpen} />
      </Modal>

      <article className="profile" onClick={setModalIsOpenToTrue}>
        <img
          src={process.env.PUBLIC_URL + "/headshots/" + imagePath + ".jpg"}
          className="headshot"
        />
        <div className="profile-name">
          <p>{person.name}</p>
        </div>
      </article>
    </div>
  ) : (
    ""
  );
};

export default PersonCard;
