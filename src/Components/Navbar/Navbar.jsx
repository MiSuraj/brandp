import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="n-wrapper">
         <div className="n-left"> 
               <div className="n-logo">Agrasarana</div>
               <span>toggle</span>
         </div>
         <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li>Home</li>
                        <li>About </li>
                        <li>Leadership</li>
                        <li>Investment</li>
                        <li>Brands</li>
                        <li>Stories</li>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>

         </div>
    </div>
  )
}

export default Navbar