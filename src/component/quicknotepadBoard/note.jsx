import React from "react";
import {MdDeleteForever} from "react-icons/md"
import "./not.css"

function Note({id,text,date ,handledeleteNote ,notes }){
    return(
   <>
   <div className="note">

<span> {text} </span>
<div className="note-footer">
    <span>{date}  </span>

    <MdDeleteForever  className="delete-icon" size="1.3em" 
    onClick={()=>handledeleteNote(id)}
    />
</div>
   </div>
   </>
    )
}
export {Note}