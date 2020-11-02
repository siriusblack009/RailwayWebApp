import React,{useEffect} from 'react'
import './Spinner.css'
const Spinner=({closeSpinner})=>{
    useEffect(()=>{
        setTimeout(()=>{
            closeSpinner();
        },3000)
    },[])
    return(
       
        <div>
            <h2>Processing
            <div className="spinner">
           
           </div>
            </h2>
           
        </div>
       
        
    )
}
export default Spinner
