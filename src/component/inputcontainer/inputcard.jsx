import React, { useContext, useState } from 'react'
import { Paper,InputBase,Button} from "@mui/material"
import "./inputcontiner.css"
import storeApi from '../uitilty/storeApi'


function Inputcard({setOpen , listId ,type}){
    const {addamorecard ,addMorelist}=useContext(storeApi)
    const[title,setTitle]=useState([])
    const handleOnchange =(e)=>{
      setTitle(e.target.value)
    }

    const handlebtnconfirm=()=>{
      if(type==='card'){
        addamorecard(title, listId);
        setTitle('')
        setOpen(false)

      }
      else{
        addMorelist(title);
        setTitle('');
        setOpen(false);
      }
    };
  


    return(
        <>
        <div>
          <Paper
          style={{
              width:"80%",
              margin:"auto",
              height:"5em",
              marginTop:"1em"
          }}
          >
           <InputBase multiline
           onBlur={()=>setOpen(false)}
           onChange={handleOnchange}
           fullWidth 
           value={title}
           placeholder=  {type==='card'?
           "Enter a title of this Card"
           :
           "Enter list title"}
           />
          </Paper>
        </div>
        <div
        style={{
            margin:"auto",
            width:"70%",
            padding:"0.5em",
            textAlign:"center",
            marginTop:"1em"
        }}
        >
     <Button 
     style={{
       cursor:"pointer"
     }}
     onClick={handlebtnconfirm}
     >
       {type==='card' ? "Add Card":"Add list"}
       
       </Button>
     <span
     className="clear-icon"
     onClick={()=>setOpen(false)}
     >
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>
    </span>
        </div>
        </>
    )
}

export {Inputcard}