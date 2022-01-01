import React from 'react';


function Chip (props){
    return(
        <div className="chip"
        style={{backgroundColor:props.color,
        display:"flex",
        gap:"0.5em",
        alignItems:"center",
        borderRadius:"2em",
        fontSize:"0.8rem",
        width:"fit-content",
        padding:"0.5em",
        color:"white"
        }}
        >
         {props.text}
         {props.close &&
         <span
        //  onClick={()=>{props.onClose?props.close }}
         >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>
             </span>
         
         }
        </div>
    )
}

export {Chip}