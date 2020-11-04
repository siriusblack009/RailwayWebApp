import {useHistory} from 'react-router-dom'

import React,{useState} from 'react'
import './Footer.css'

function Footer() {
    
    const [val,setVal]=useState([])
    const history=useHistory()
    
    
    const [details,setDetails]=useState({train_name:"",train_no:0,seats:0,src:"",src_arr:"",src_dep:"",src_halt:"",dest:"",dest_arr:"",dest_dep:"",dest_halt:""})
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setDetails(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const station=["Mumbai","Delhi","Chennai","Bangalore","Kolkata"];
    function st(){
        let res=[];
        for(var i=0;i<station.length;i++){
            res.push(
            <option id={station[i]}>{station[i]}</option>
            )
        }
        return res;
    }
    const handleSubmit=()=>{
        
        
        const values=[...val]
        values.push({stop:"",stop_arr:"",stop_dest:"",stop_halt:""})
        setVal(values);
    }
    const handleSubmit1=()=>{
       
        if(!details.train_name.trim())
        {
            alert("Please enter train name ")
           
            return;
        }
        if(details.train_no.length!==5||details.train_no<=0)
        {
            alert("Enter valid train number")
            return;
        }
        if(details.seats<=0)
        {
            alert("Enter valid no of seats")
            return;
        }
        if(details.src===details.dest){
            alert("Source and Destination cannot be same")
            return;
        }
        if(!details.src_arr.trim()||!details.src_dep.trim()||!details.src_halt.trim()||!details.dest_arr.trim()||!details.dest_dep.trim()||!details.dest_halt.trim()){
            alert("Enter valid times")
            return;
        }
        alert("Train Added")
        history.push('/adminpage')
    }
    
   
    const handleInputChange=(index,e)=>{
        const values=[...val];
        if(e.target.name==="stop"){
            values[index].stop=e.target.value;
        }
        else if(e.target.name==="arr"){
            values[index].stop_arr=e.target.value;

        }
        else if(e.target.value==="dep"){
            values[index].stop_dest=e.target.value;
        }
        else{
            values[index].stop_halt=e.target.value;
        }
        setVal(values)
    }
    const handleClick=()=>{
        if(val[val.length-1].stop===details.src||val[val.length-1].stop===details.dest){
            alert("Please enter different station")
            return;
        }
        for(var i=0;i<val.length-1;i++){
            if(val[i].stop===val[val.length-1].stop)
            {
                alert("Please enter different station")
                return;
            }
        }
        const values=[...val]
        values.push({stop:"",stop_arr:"",stop_dest:"",stop_halt:""})
        setVal(values);
    }
    const handleCLick1=(index)=>{
        
        const values=[...val];
        values.splice(index,1);
        setVal(values);
        
    }
    return (
        <>
        <div className="box1">
           
        <div className="extra1"></div>
        <div className="contain2">
            <div className="header_contain">
                <h2>Enter Train Details:</h2>
            </div>
            <div className="form">
                <div className="first">
                    <div className="content">
                    <label htmlFor="train_name" >Train Name:</label>
                <input id="train_name" name="train_name" type="text" placeholder="Enter Train Name*" style={{textTransform:"capitalize"}} onChange={handleChange} />
                </div>
                <div className="content">
                    <label htmlFor="train_no">Train No:</label>
                <input id="train_no" name="train_no" type="number" 
                required
                placeholder="Enter Train No*"
                onChange={handleChange}
                />

                </div>
                <div className="content">
                    <label htmlFor="seats">Seats:</label>
                    <input id="seats" name="seats" placeholder="Enter no of Seats*" type="number"
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="first">
                    <div className="cont3">
                        <label htmlFor="src">Source:</label>
                        <select name="src" id="src" onChange={handleChange}>
                            {st()}
                        </select>
                    </div>
                    <div className="cont3">
                    <label htmlFor="src_arr" >Arrival Time:</label>
                <input id="src_arr" name="src_arr" type="time" step="5" onChange={handleChange} />
                </div>
                <div className="cont3">
                    <label htmlFor="src_dep">Departure Time:</label>
                <input id="src_dep" name="src_dep" type="time"step="5" onChange={handleChange}
                />

                </div>
                <div className="cont3">
                <label htmlFor="src_halt">Halt Time:</label>
                <input id="src_halt" name="src_halt" type="time"step="5" onChange={handleChange}
                />
                </div>
                </div>
                <div className="first">
                <div className="cont3">
                        <label htmlFor="dest">Destination:</label>
                        <select name="dest" id="dest" onChange={handleChange}>
                            {st()}
                        </select>
                    </div>
                    <div className="cont3">
                    <label htmlFor="dest_arr" >Arrival Time:</label>
                <input id="dest_arr" name="dest_arr" type="time" step="5" onChange={handleChange} />
                </div>
                <div className="cont3">
                    <label htmlFor="dest_dep">Departure Time:</label>
                <input id="dest_dep" name="dest_dep" type="time"step="5" onChange={handleChange}
                />

                </div>
                <div className="cont3">
                <label htmlFor="dest_halt">Halt Time:</label>
                <input id="dest_halt" name="dest_halt" type="time"step="5" onChange={handleChange}
                />
                </div>
               
                </div>
                <div className="first">
                <div className="cont">
                   
                     <button  className="btn2" onClick={handleSubmit}>Add Stop</button>
                    </div>
                    <div className="cont">
                     <button  className="btn2" onClick={handleSubmit1}>Submit</button>
                    </div>
                </div>
               
            </div>
        </div>
       
    </div>
       
            {/* {show&& displayStops(stops)}         */}
           { <div className="d">
                {val.map((val,index)=>(
                     <div className="a">
                     <div className="b">
                         <label htmlFor="stop">Stop:</label>
                         <select name="stop" id="stop" value={val.stop} onChange={e=>handleInputChange(index,e)} >
                                     {st()}
                                 </select>
                     </div>
                     <div className="b">
                         <label htmlFor="arr">Arrival Time:</label>
                         <input type="time" step="5" name="arr" value={val.stop_arr} onChange={e=>handleInputChange(index,e)}/>
                     </div>
                     <div className="b">
                         <label htmlFor="dep">Departure Time:</label>
                         <input type="time" name="dep" step="5" value={val.stop_dest} onChange={e=>handleInputChange(index,e)}/>
                     </div>
                     <div className="b">
                         <label htmlFor="halt">Halt Time:</label>
                         <input type="time" name="halt" step="5" value={val.stop_halt} onChange={e=>handleInputChange(index,e)}/>
                     </div>
                     <div className="b">
                         <button className="btn2" onClick={()=>handleClick()}>Add Stop</button>
                     </div>
                     <div className="b">
                         <button className="btn2" onClick={(index)=>handleCLick1(index)}>Delete Stop</button>
                     </div>
                 </div>
                ))}
           
        </div>}
    </>
    )
}

export default Footer
