import React from 'react'
import './Box.css'
function Box() {
    const header=["S.No","Id","Passenger_Id","Name","Age","Gender","Pnr_No","Seat_No","Train_No","Fare","Status","Source","Destination"];
    const content=[{Id:12,Passenger_Id:23,Name:"Yashaswi",Age:20,Gender:"Male",Pnr_No:9044249,Seat_No:44,Train_No:12345,Fare:765,Status:"Confirmed",Source:"Mumbai",Destination:"Delhi"}];
    function generateHeader(){
        let res=[];
        for(var i=0;i<header.length;i++){
            res.push(<div className="head">{header[i]}</div>)
        }
        return res;
    }
    function generateData(){
        let res=[];
        for(var i=0;i<content.length;i++){
            if(content[i].Seats===0)continue;
            res.push(
                <div className="tr">
            <div className="td" >{i+1}</div>
            <div className="td" >{content[i].Id}</div>
            <div className="td">{content[i].Passenger_Id}</div>
            <div className="td">{content[i].Name}</div>
            <div className="td">{content[i].Age}</div>
            <div className="td">{content[i].Gender}</div>
            <div className="td">{content[i].Pnr_No}</div>
            <div className="td">{content[i].Seat_No}</div>
            <div className="td">{content[i].Train_No}</div>
            <div className="td">{content[i].Fare}</div>
            <div className="td">{content[i].Status}</div>
            <div className="td">{content[i].Source}</div>
            <div className="td">{content[i].Destination}</div>
            
            
                </div>
            )
        } 
        if(res.length===0){
            res.push(
                <h1 style={{justifySelf:"center",justifyContent:"center",alignContent:'center',marginLeft:"35vw"}}>No Bookings Available</h1>
            )
        }
        return res;
    }
    return (
         <div className="box15">
             <h2>Bookings:</h2>
            <div className="tabl">
              
              <div className="table_header">
                 {generateHeader()}
            </div>
              <div className="table_body">
                 {generateData()}
              </div>
          
       </div>
        </div>
    )
}

export default Box
