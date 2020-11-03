import React from 'react'
import './Header.css'
import {IconButton} from '@material-ui/core'

import TrainIcon from '@material-ui/icons/Train'
function Header() {
    return (
       <div className="header">
           <div className="header_left">
               <div className="icon">
                   <IconButton>
                       <a href="/"><TrainIcon/></a>
                   </IconButton>
               </div>
                <div className="title">
                    <div className="head">
                        <h2>Railway</h2>
                    </div>
                    <div className="foor"><h5>Ticketing System</h5></div>
                </div>
           </div>
           <div className="header_right">
               <div className="login">
                   <a  href="/userlogin"><h3>Login</h3></a> 
               </div>
               <div className="signup1">
                   <a href="/bookings"><h3>Bookings</h3></a> </div>
           </div>
       </div>
      
    )
}

export default Header
