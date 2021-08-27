//rfce
import React from 'react'
import './Hader.css';
import logo from './icon.png'
import { Link } from 'react-router-dom'
import  { FiSearch } from  'react-icons/fi';
function Header() {
    return (
        <div  className="header">
            <div className="header__logo">   
                <img className="hello"   src={logo} alt="" />
                <li>Farmino</li>
                </div>
                <ul className="collection">
      <li className="collection_it"><Link to="/Home">Home</Link></li>
      <li className="collection_it"><Link to="/About">About</Link></li>
      <li className="collection_it"><Link to="/Services">Services</Link></li>
      <li className="collection_it"><Link to="/Gallery">Gallery</Link></li>
      <li className="collection_it"><Link to="/Contact">Contact</Link></li>
      <li className="collection_it"><Link to="/Contact"><FiSearch/></Link></li>
      </ul>

        </div>
    )
}







export default Header