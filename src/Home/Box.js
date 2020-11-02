import React from 'react'
import './Box.css'
import {useHistory} from 'react-router-dom'

function Box() {
    const history=useHistory();
    const handleClick=()=>{
        history.push('/userlogin')
    }
    const handleClick1=()=>{
        history.push('/adminlogin')
    }
    return (
        <div className='box'>
              <img src="https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>" 
            <div className="image">
               
                <div className="extra"></div>
                
                <div className="book">
                    
                        <div className="User">
                            <button onClick={handleClick}>User</button>
                        </div>
                        
                        <div className="admin" onClick={handleClick1}><button>Admin</button></div>
                </div>
            </div>
            
        </div>
    )
}

export default Box
