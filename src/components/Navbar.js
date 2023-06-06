import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
  return (
    <div>
        <nav className="navbar">
            <div className="container">
                <Link to="/home" className="logo">LingoMingo</Link>
                <Link to="about">About</Link>
                <Link to="services">Services</Link>
                <Link to="login">Login</Link>
                <div className="menu" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar