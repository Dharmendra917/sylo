import React from 'react'
import './selectCard.css'



const SelectCard = (props) => {
  return (
    <>
      <div className="selectCard">
        <h3>{props.title}</h3>
        <button className="btn">{props.btn}</button>
      </div>
    </>
  )
}

export default SelectCard;