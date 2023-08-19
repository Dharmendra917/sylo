import React from 'react'
import 'remixicon/fonts/remixicon.css'
import './cafe.css'

const Cafe = (props) => {
    return (
        <>
            <div className="cafe">
                <div className="image">
                    <img src={props.image} alt="" />
                </div>
                <h3>{props.CafeName}</h3>
                <p>{props.para}</p>
                <div className="content">
                    <div className="rating"><i class="ri-star-fill"></i>{props.rating}</div>
                    <div className="price"><i class="ri-refund-2-line"></i></div>
                    <div className="like"><i class="ri-thumb-up-line"></i>&nbsp;&nbsp;<i class="ri-thumb-down-line"></i></div>
                </div>
            </div>
        </>
    )
}

export default Cafe
