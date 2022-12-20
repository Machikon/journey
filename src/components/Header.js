import { MenuOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css';
import { Data } from './Data';


const Header = () => {

    const [open, setOpen] = useState (false)
  
    const showMenu = () => {
        setOpen(!open)
    }

  return (
    <div className='"header'>
        <nav>

        <div className='logo'>
            <h1>Machiko Carroll</h1>
        </div>

       <ul className='ul-items'>
            <li>
                <Link to="/about">About Me</Link>
            </li>

            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
                <Link to="/contact">Contact</Link>
            </li>

            <li>
                <Link to="/resume">Resume</Link>
            </li>

            {/* <div className="hamburger-menu">

                <MenuOutlined className="menu"/>

                </div>  */}

       </ul>

        </nav>

        <nav className= {open ? 'slider active' : 'slider'}>
          <ul className='slider-ul' onClick={showMenu}>
                {Data.map((item, index) => {
                return (
                    <li key={index} className={item.className}>
                        <Link to={item.path}>{item.text}</Link>
                    </li>
                )
            })}

        </ul>

        </nav>

    </div>
  )
}

export default Header;
