import React,{useReducer} from 'react'
import './Box.css'
import {useHistory} from 'react-router-dom'
function Box() {
    const defaultState={
        name:'',
        email:'',
        username:'',
        pwd:'',
        age:0,
        gender:'',
        addr:'',
        city:'',
        adhaar:0,
        phone:0,
    }
    const reducer=(state,action)=>{
        
    }
    const history=useHistory();
    const [state,dispatch]=useReducer(reducer,defaultState)
    const handleSubmit=()=>{
        var mail="[^ @]*@[^ @]*";
        var ph=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(!state.name.trim()){
            alert("Please Enter Name")
            return;
        }
        if(state.email.match(mail)){
           
        }
        else{
            alert("Please Enter Valid Email")
            return;
        }
        if(!state.username.trim())
        {
            alert("Please Enter Username")
            return;
        }
        if(!state.pwd.trim())
        {
            alert("Please Enter Password")
            return;
        }
        if(state.age<=0||state.age>150)
        {
            alert("Please Enter valid Age")
            return;
        }
        if(!state.addr.trim()){
            alert("Please Enter Address")
            return;
        }
        if(!state.city.trim()){
            alert("Please enter City")
            return;
        }
        if(state.adhaar.length!==9||state.adhaar<=0){
            alert("Please Enter Valid Aadhaar No")
            return;
        }
        if(state.phone.match(ph)){}
        else{
            alert("Please enter Valid Phone No")
            return;
        }
        history.push('/search')
    }
    return (

        
       <div className="box1">
           
           <div className="extra1"></div>
           <div className="contain2">
               <div className="header_contain">
                   <h2>Enter Details:</h2>
               </div>
               <div className="form">
                   <div className="first">
                       <div className="content">
                       <label htmlFor="Name" >Name:</label>
                   <input id="Name" name="Name" type="text" placeholder="Enter Your Name*" style={{textTransform:"capitalize"}} onChange={(e)=>state.name=e.target.value}/>
                   </div>
                   <div className="content">
                       <label htmlFor="Email">Email:</label>
                   <input id="Email" name="Email" type="text" 
                   required
                   placeholder="Enter Your Email*"
                   onChange={(e)=>state.email=e.target.value}/>

                   </div>
                   <div className="content">
                       <label htmlFor="Username">Username:</label>
                       <input id="Username" name="Username" placeholder="Enter new Username*" type="text"
                       onChange={(e)=>state.username=e.target.value}/>
                   </div>
                   </div>
                   <div className="first">
                       <div className="content">
                       <label htmlFor="Password" >Password:</label>
                   <input id="Password" name="Password" type="text" placeholder="Enter new Password*" onChange={(e)=>state.pwd=e.target.value}/>
                   </div>
                   <div className="content">
                       <label htmlFor="Age">Age:</label>
                   <input id="Age" name="Age" type="number"placeholder="Enter Your Age*"
                   onChange={(e)=>state.age=e.target.value}/>

                   </div>
                   <div className="content">
                       <label htmlFor="gender">Gender:</label>
                       <select name="gender" id="gender" onChange={(e)=>state.gender=e.target.value}>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                           <option value="third">Third-Gender</option>
                       </select>
                   </div>
                   </div>
                   <div className="first">
                       <div className="content">
                       <label htmlFor="Address" >Address:</label>
                   <input id="Address" name="Address" type="text" placeholder="Enter Your Address*"
                   onChange={(e)=>state.addr=e.target.value}/>
                   </div>
                   <div className="content">
                       <label htmlFor="City">City:</label>
                   <input id="City" name="City" type="text" placeholder="Enter Your City*"
                   style={{textTransform:"capitalize"}} onChange={(e)=>state.city=e.target.value}/>

                   </div>
                   <div className="content">
                       <label htmlFor="aadhar">Aadhaar No:</label>
                       <input id="aadhar" name="aadhar" placeholder="Enter Your Aadhaar No*" type="number"
                       onChange={(e)=>state.adhaar=e.target.value}/>
                   </div>
                   </div>
                   <div className="second">
                       <div className="cont">
                        <label htmlFor="phone">Phone No:</label>
                        <input type="number" name="phone" id="phone" placeholder="Enter Your Phone No*"
                        onChange={(e)=>state.phone=e.target.value}/>
                       </div>
                       <div className="cont">
                        <button onClick={handleSubmit} className="btn2">Submit</button>
                       </div>
                   </div>
               </div>
           </div>
           
       </div>
    )
}

export default Box
