import { MenuOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css';

const Header = () => {
  return (
    <div className='"header'>
        <nav>

        <div className='logo'>
            <h1>Machiko Carroll</h1>
        </div>

       <ul className='ul-items'>
            <li>
                <Link to="#">About Me</Link>
            </li>

            <li>
                <Link to="#">Portfolio</Link>
            </li>

            <li>
                <Link to="#">Contact</Link>
            </li>

            <li>
                <Link to="#">Resume</Link>
            </li>

            <div className="hamburger-menu">

                <MenuOutlined className="menu" />

                </div> 

       </ul>

        </nav>

    </div>
  )
}

export default Header;
