import { useState } from "react"
import React from "react";

function Addnote({handleAddNote,handledeleteNote }){
 const[notetext,setNote]=useState('')
 const characterLimit= 200;

 const handleChange=(event)=>{
     if(characterLimit-event.target.value.length>=0){
         setNote(event.target.value)       
     }
 }
 const handlieSaveClick=()=>{
     if(notetext.trim().length >0){

         handleAddNote(notetext)
         setNote('')
     }
 }
    return(
 <div className="note new">
     <textarea  
     rows="8"
     cols="20"
     placeholder="Type to Add a notepad..."
     value={notetext}
     onChange={handleChange}
     ></textarea>
  <div className="note-footer">
      <span>{characterLimit- notetext.length} Remaining</span>
      <button className="save" onClick={handlieSaveClick} >save </button>
  </div>
 </div>
    )
}

export {Addnote}