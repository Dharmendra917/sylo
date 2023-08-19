import React from 'react'
import Cafe from './cafe'
import './venue.css'

const Venue = () => {

    const cafe1 = {
        image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        CafeName: "The Royal Cafe",
        para: "HSR Layout Indrapuri - 4.2km 8 Packages Available",
        rating:"4.1"
    }
    const cafe2 = {
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        CafeName: "Handcrafted Cafe",
        para: "BHEL Indrapuri Piplani- 0.2km 12 Packages Available",
        rating:"4.4"
    }
    const cafe3 = {
        image: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        CafeName: "Starbucks Coffee",
        para: "Indrapuri Sector C - 2.8km 1 Packages Available",
        rating:"4.8"
    }
    const cafe4 = {
        image: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
        CafeName: "Black And White Cafe",
        para: "169 fourth Floor - 9.4km 4 Packages Available",
        rating:"4.5"
    }

  return (
    <>
    <h2>** Most Popular Venues ** </h2>
   <div className="cafeteria">
   <Cafe className="cafes" image={cafe1.image} CafeName={cafe1.CafeName} para={cafe1.para} rating={cafe1.rating}/>
    <Cafe className="cafes" image={cafe2.image} CafeName={cafe2.CafeName} para={cafe2.para} rating={cafe2.rating}/>
    <Cafe className="cafes" image={cafe3.image} CafeName={cafe3.CafeName} para={cafe3.para} rating={cafe3.rating}/>
    <Cafe className="cafes" image={cafe4.image} CafeName={cafe4.CafeName} para={cafe4.para} rating={cafe4.rating}/>
   </div>
    </>
  )
}

export default Venue;
