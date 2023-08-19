import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <>
        <div className='card'>
            <div className="image">
            <img src={props.image} alt="BirthDay" />
            </div>
            <h2>{props.title}</h2>
        </div>
    </>
  )
}

export default card;
