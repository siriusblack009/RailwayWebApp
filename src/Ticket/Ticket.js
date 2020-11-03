import React,{useState,useEffect} from 'react'
import './Ticket.css'
import Header from './Header'
import Box from './Box'
import {useHistory} from 'react-router-dom'
function Ticket() {
    const history=useHistory()
   window.addEventListener("popstate",e=>{
       history.push('search')
   })
      
   
    return (
        <div className="ticket">
            <Header/>
            <Box/>
        </div>
    )
}

export default Ticket
