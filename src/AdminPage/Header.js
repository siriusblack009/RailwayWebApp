import React from 'react'
import './Header.css'
import {IconButton} from '@material-ui/core'
import {Link} from 'react-router-dom'
import TrainIcon from '@material-ui/icons/Train'
function Header() {
    return (
        <div className='header'>
            <div className="icon">
                
                <IconButton>
                    <a href="/" className="icona"><TrainIcon/></a>
                    
                </IconButton>
                
                
            </div>
            <div className="yagsa">
                <a href="/">
                <h1>Railway Ticketing System</h1>
                </a>
            </div>
            {/* <div className="header__center">
               <a href="#">
                   <h3>Login</h3>
                   <h3>Register</h3>
               </a>
            </div> */}
           
        </div>
    )
}

export default Header
