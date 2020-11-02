import React,{useState} from 'react'
import './Box.css'
import {useHistory} from 'react-router-dom'
function Box() {
    const history=useHistory()
    const [username,setUsername]=useState('')
    const [pwd,setPwd]=useState('')
    const handleClick=()=>{
        if(!username.trim()){
            alert("Please enter Username");
            return;
        }
        if(!pwd.trim()){
            alert("Please Enter Password");
            return;
        }
        history.push('/adminpage')
    }
    return (
        <div className='box'>
              <img src="https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>" 
            <div className="image">
               <div className="extra"></div>
                <div className="book">
                    <div className="book_header">
                        <h3>Admin Login</h3>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Enter Username*"  className="text" onChange={(e)=>setUsername(e.target.value)}/>
                        <input type="password" placeholder="Enter Password*"  className="pwd"
                        onChange={(e)=>setPwd(e.target.value)}/>
                        <button  className="btn" 
                         onClick={handleClick}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box
