import { IconButton } from '@material-ui/core'
import TrainIcon from '@material-ui/icons/TrainRounded'
import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header2">
            <div className="header_center">
                <div className="icon">
                    <IconButton>
                        <a href="/"><TrainIcon></TrainIcon></a>
                    </IconButton>
                </div>
                <div className="title">
                    <h2>Railway Ticketing System</h2>
                </div>
            </div>
            <div className="header_right">
                <a href="/search"><h3>Go Back</h3></a>
            </div>
        </div>
    )
}

export default Header
