import {useHistory} from 'react-router-dom'

import React,{useState} from 'react'
import './Footer.css'
function Footer() {
    const history=useHistory()
    const [stops,setStops]=useState(0);
    const [show,setShow]=useState(false)
    
    const handleSubmit=()=>{
        if(stops===0){
            alert("Please specify number");
            return;
        }
        setShow(true);
        
    }
    const handleSubmit1=()=>{
        alert("Train Added")
        history.push('/adminpage')
    }
    const stop=[
        <div className="a">
            <div className="b">
                Stop:
            </div>
            <div className="b">
                <label htmlFor="arr">Arrival Time:</label>
                <input type="time" step="5"/>
            </div>
            <div className="b">
                <label htmlFor="dep">Departure Time:</label>
                <input type="time" step="5"/>
            </div>
            <div className="b">
                <label htmlFor="halt">Halt Time:</label>
                <input type="time" step="5"/>
            </div>
        </div>

    ]
    function displayStops(n){
        let res=[];
        for(var i=0;i<n;i++){
            res.push(stop);
        }
        let res1=[];
        res1.push(
            <div className="d">
                {res}
            </div>
        )
        return res1;
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
                    <label htmlFor="Name" >Train Name:</label>
                <input id="Name" name="Name" type="text" placeholder="Enter Train Name*" style={{textTransform:"capitalize"}} />
                </div>
                <div className="content">
                    <label htmlFor="Email">Train No:</label>
                <input id="Email" name="Email" type="number" 
                required
                placeholder="Enter Train No*"
                />

                </div>
                <div className="content">
                    <label htmlFor="Username">Seats:</label>
                    <input id="Username" name="Username" placeholder="Enter no of Seats*" type="number"
                    />
                </div>
                </div>
                <div className="first">
                    <div className="cont3">
                        <h3>Source:</h3>
                    </div>
                    <div className="cont3">
                    <label htmlFor="Password" >Arrival Time:</label>
                <input id="Password" name="Password" type="time" step="5"  />
                </div>
                <div className="cont3">
                    <label htmlFor="Age">Departure Time:</label>
                <input id="Age" name="Age" type="time"step="5"
                />

                </div>
                <div className="cont3">
                <label htmlFor="Age">Halt Time:</label>
                <input id="Age" name="Age" type="time"step="5"
                />
                </div>
                </div>
                <div className="first">
                <div className="cont3">
                        <h3>Destination:</h3>
                    </div>
                    <div className="cont3">
                    <label htmlFor="Password" >Arrival Time:</label>
                <input id="Password" name="Password" type="time" step="5"  />
                </div>
                <div className="cont3">
                    <label htmlFor="Age">Departure Time:</label>
                <input id="Age" name="Age" type="time"step="5"
                />

                </div>
                <div className="cont3">
                <label htmlFor="Age">Halt Time:</label>
                <input id="Age" name="Age" type="time"step="5"
                />
                </div>
               
                </div>
                <div className="first">
                <div className="cont">
                    <label htmlFor="">No of Stops:</label>
                    <input type="number" placeholder="Enter no of Stops" onChange={(e)=>setStops(e.target.value)}/>
                     <button  className="btn2" onClick={handleSubmit}>Add Stops</button>
                    </div>
                    <div className="cont">
                     <button  className="btn2" onClick={handleSubmit1}>Submit</button>
                    </div>
                </div>
               
            </div>
        </div>
       
    </div>
       
            {show&& displayStops(stops)}        
    </>
    )
}

export default Footer
