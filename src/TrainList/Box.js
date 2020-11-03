import React ,{useState}from 'react'
import {useHistory} from 'react-router-dom'
import './Box.css'
function Box() {
    const history=useHistory();
    const header=["Serial No","Train No","Train Name","Seats Available","Book"];
    
    const content=[{Train_No:12345,Train_Name:"rajdhani",Seats:0},{Train_No:12345,Train_Name:"rajdhani",Seats:0},{Train_No:12345,Train_Name:"rajdhani",Seats:0},{Train_No:12345,Train_Name:"rajdhani",Seats:2}]
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
            <div className="td" >{content[i].Train_No}</div>
            <div className="td">{content[i].Train_Name}</div>
            <div className="td">{content[i].Seats}</div>
            <div className="td"><button className="btn3" onClick={()=>history.push('/passenger')}
            >Select</button></div>
                </div>
            )
        } 
        if(res.length===0){
            res.push(
                <h1 style={{justifySelf:"center",justifyContent:"center",alignContent:'center',marginLeft:"35vw"}}>No Trains Available</h1>
            )
        }
        return res;
    }
    return (
        <>
       <div className="box">
           <div className="tabl">
              
                  <div className="table_header">
                     {generateHeader()}
                </div>
                  <div className="table_body">
                     {generateData()}
                  </div>
              
           </div>
           
       </div>
      
       </>
    )
}

export default Box
