import React from 'react'
import SelectCard from './selectCard'
import './select.css'

const Select = () => {
    const selectCard1 = {
        title: "Birthdays",
        btn: "Get this Package"
    }
    const selectCard2 = {
        title: "Anniversary",
    }
    const selectCard3 = {
        title: "Farewell",
    }
    const selectCard4 = {
        title: "Graduation",
    }
    const selectCard5 = {
        title: "Reception",
    }


    return (
        <>
            <div className="line1">
                <div className="L_line"></div>
                <div className="title">
                    <h3>SYLO Select</h3>
                    <p>Exclusive Celebration Plan</p>
                </div>
                <div className="R_line"></div>
            </div>
            <div className="allCards">
                <div>
                    <SelectCard title={selectCard1.title} btn={selectCard1.btn} />
                </div>
                <div>
                    <SelectCard title={selectCard2.title} btn={selectCard1.btn} />
                </div>
                <div>
                    <SelectCard title={selectCard3.title} btn={selectCard1.btn} />
                </div>
                <div>
                    <SelectCard title={selectCard4.title} btn={selectCard1.btn} />
                </div>
                <div>
                    <SelectCard title={selectCard5.title} btn={selectCard1.btn} />
                </div>
    
            </div>
            <div className="line2"></div>
        </>
    )
}

export default Select
