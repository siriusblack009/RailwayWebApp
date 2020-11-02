import React,{useState} from 'react'
import './Box.css'
import {useHistory} from 'react-router-dom'
function Box() {
    const history=useHistory();
    const [username,setUsername]=useState('');
    const [pwd,setPwd]=useState('')
    const handleSubmit=()=>{
        if(!username.trim()){
            alert("Please enter valid Username");
            return;
        }
        if(!pwd.trim()){
            alert("Please enter valid password")
            return;
        }
        history.push('/search');
    }
    return (
        <div className='box'>
              <img src="https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>" 
            <div className="image">
               <div className="extra"></div>
                <div className="book">
                    <div className="book_header">
                        <h3>User Login</h3>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Enter Username*" required className="text" onChange={(e)=>setUsername(e.target.value)}/>
                        <input type="password" placeholder="Enter Password*" required className="pwd"
                        onChange={(e)=>setPwd(e.target.value)}/>
                        <button  className="btn" type="submit" onClick={handleSubmit}>Login</button>
                        <div className="new">
                        <h3>New User?
                            
                        </h3>
                        <button className="btn"
                        onClick={()=>history.push('/signup')}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box
