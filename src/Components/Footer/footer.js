import React from 'react'
import 'remixicon/fonts/remixicon.css'
import './footer.css'

const Navbar = () => {
  return (
    <>
    <div className="line"></div>
      <div className="footNav">
        <div className="home">
        <i class="ri-home-4-line"></i>
        <h5>Sylo</h5>
        </div>
        <div className="search">
        <i class="ri-search-line"></i>
        <h5>Search</h5>
        </div>
        <div className="order">
        <i class="ri-list-unordered"></i>
        <h5>Orders</h5>
        </div>
        <div className="profile">
        <i class="ri-profile-line"></i>
        <h5>Profile</h5>
        </div>
      </div>
    </>
  )
}

export default Navbar;
