import React from 'react'
import './Box.css'
function Box() {
    var ticket={Name:"Yashaswi Jaiswal",Age:25,Gender:"Male",Train_No:12345,Source:"Mumbai",Destination:"Delhi",Pnr_No:9844249,Seat_No:4,Fare:655};
    return (
        <div className="masterbox">
            <div className="box4" style={{boxShadow:"none"}}></div>
            <div className="box4" style={{boxShadow:"none",flex:"0.08"}}></div>
        <div className="box4" style={{flex:"0.33"}}>
            <div className="subbox">
                <h2>Ticket Details:</h2>
            </div>
            <div className="subbox"><h4>Name:{ticket.Name}</h4></div>
            <div className="subbox"><h4>Age:{ticket.Age}</h4></div>
            
            <div className="subbox"><h4>Gender:{ticket.Gender}</h4></div>
            
            <div className="subbox"><h4>Train No:{ticket.Train_No}</h4></div>
            
            <div className="subbox"> <h4>Source:{ticket.Source}</h4></div>
           
            <div className="subbox"><h4>Destination:{ticket.Destination}</h4></div>
            
            <div className="subbox"> <h4>Pnr_No:{ticket.Pnr_No}</h4></div>
           
            <div className="subbox"> <h4>Seat_no:{ticket.Seat_No}</h4></div>
           
            <div className="subbox"><h4>Fare:{ticket.Fare}</h4></div>
            
        </div>
        </div>
    )
}

export default Box
