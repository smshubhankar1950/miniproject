import React from 'react'
import './createCard.css'
import card from "../../../../Assets/VisaBlue.svg"
import close from "../../../../Assets/times-solid.svg"
import prev from "../../../../Assets/icons8-left-24.png"
import check from "../../../../Assets/checkmark.svg"
//Choose Payment card container
export const CreateCard = (props)=>{
    return (
    <div className="container">
        <div className="back" onClick={props.prevDisplay}>
          <img src={prev} alt="back"/>
        </div>
        <div className="headingCard">
            Choose Card
        </div>
        <div style={{display:"inline-block"}}>
          <img src={close} className="closeCard" alt="close" onClick={props.showModal}></img>
        </div>
      <hr/>
      <div className="section2">
          <div className="data upload-label-card">
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
          <div className="data upload-label-card row">
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
          <div className="data upload-label-card">
          <div className="row">
          <div className="column-1-10"></div>
            <div className="column-8-10">+ Add Card</div>
          </div>
          </div>
        <div className="create-card">
            <input type="submit" value="Pay" className="create-btn"/>
        </div>
      </div>
    </div>
    
    )
}