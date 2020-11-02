import { IconButton } from '@material-ui/core'
import React from 'react'
import './Header.css'
import TrainIcon from '@material-ui/icons/TrainRounded'
function Header() {
    return (
        <div className="head1">
            <IconButton><a href="/"><TrainIcon/></a></IconButton>
            <h1>Railway Ticketing System</h1>
        </div>
    )
}

export default Header
