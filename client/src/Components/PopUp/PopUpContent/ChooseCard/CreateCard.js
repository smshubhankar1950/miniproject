import React ,{useRef, useEffect}from 'react'
import './createCard.css'
import card from "../../../../Assets/VisaBlue.svg"
import close from "../../../../Assets/times-solid.svg"
import prev from "../../../../Assets/icons8-left-24.png"
import check from "../../../../Assets/checkmark.svg"
import { Link } from 'react-router-dom'
//Choose Payment card container
export const CreateCard = (props)=>{

// 1st cards selection
  const selectedRef = useRef(null);
  useEffect(() => {
      selectedRef.current.focus();
  }, [selectedRef]);

    return (
    <div className="container">
       <div className="row">
        <div className="col-1-2-3">
        <div className="back" onClick={props.prevDisplay}>
          <img src={prev} alt="back"/>
        </div>
        </div>
        <div className="col-2-2-3">
        <div className="headingCard">
            Choose Card
        </div>
        </div>
        <div className="col-1-2-3">
        <div>
          <img src={close} className="closeCard" alt="close" onClick={props.showModal}></img>
        </div>
        </div>
        </div>
      <hr/>
      <div className="section2">
          <div className="data upload-label-card" ref={selectedRef} tabIndex="0">
              <div className="row">
                <div className="column-1-10">
                  <img src={check} alt="check" className="check-card"/>
                </div>
                <div className="column-2-10">
                  <img src={card} alt="visa" className="visa-card"/>
                </div>
                <div className="column-6-10 col-text">
                  Visa Card ending with 2456
                </div>
              </div>
          </div>
          <div className="data upload-label-card row" tabIndex="1">
            <div className="row">
                <div className="column-1-10">
                  <img src={check} alt="check" className="check-card"/>
                </div>
                <div className="column-2-10">
                  <img src={card} alt="visa" className="visa-card"/>
                </div>
                <div className="column-6-10 col-text">
                  Visa Card ending with 7654
                </div>
              </div>
          </div>
          <div className="data upload-label-card" tabIndex="2">
          <div className="row">
          <div className="column-1-10"></div>
            <div className="column-8-10">+ Add Card</div>
          </div>
          </div>
        <div className="create-card">
            <Link to="/confirm" className="create-btn">Pay</Link>
        </div>
      </div>
    </div>
    
    )
}