import React from 'react'
import './customers.css'
import Person from './person'

const person1 = {
    image:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
}
const person2 = {
    image:"https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
}
const person3 = {
    image:"https://images.unsplash.com/photo-1516055619834-586f8c75d1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
}

const Customers = () => {
  return (
    <>
    <h1>See What our customers says!</h1>
    <div className="persons">
    <Person image={person1.image}/>
    <Person image={person2.image}/> 
    <Person image={person3.image}/>
    </div>
    </>
  )
}

export default Customers;
