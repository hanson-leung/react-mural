import React, { useState, useEffect } from "react";

import QrReader from 'react-qr-reader';

import './ScanCard.css';

// BasicModal Component
import Modal from "react-modal";

import PersonInfo from '../PersonInfo/PersonInfo';

const Scanner = () => {

  const [isScanned, setScan] = useState(false);

  const [scanData, setScanData] = useState(null);

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
    setScanData(null);
    setScan(false);
  }
 
  const handleScan = data => {
    if (data) {
      setScan(true);
      setScanData(data);
      console.log(data);
      setModalIsOpenToTrue();
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div id="scanner">
      {
        !modalIsOpen ?
          <QrReader
            id="reader"
            delay={300}
            onError={handleError}
            onScan={handleScan}
            facingMode={"environment"}
            style={{ width: '100%' }}
          />
        :
          <div>
          </div>

      }

    <Modal isOpen={modalIsOpen} id="scan-modal">
        <button className="back-button" onClick={setModalIsOpenToFalse}>&#8592;</button>
        <PersonInfo scan={scanData} modalIsOpen={modalIsOpen} />
    </Modal>

      
    </div>
  )
}

export default Scanner;