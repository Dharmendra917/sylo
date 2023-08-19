import React from 'react'
import './person.css'

const Person = (props) => {
    return (
        <>
            <div className='person'>
                <div className="images">
                    <img src={props.image} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Person;
