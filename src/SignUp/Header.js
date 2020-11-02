import { IconButton } from '@material-ui/core'
import React from 'react'

import TrainIcon from '@material-ui/icons/TrainRounded'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="icon">
                <IconButton>
                   <a className="icona" href="/"><TrainIcon></TrainIcon></a> 
                </IconButton>
            </div>
            <div className="heading">
                <div className="title">
               <a href="/"><h1>Railway Ticketing System</h1></a> 
               </div>
               <div className="goback">
               <a  href="/userlogin"><h3>Go Back</h3></a>
               </div>
              
            </div>
        </div>
    )
}

export default Header
