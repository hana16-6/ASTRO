import React, { useState }  from 'react'
import { Topbar } from '../topbar/topbar'
import { Sidemenu } from './sidemenu'



function Navigition({setbackgroundIamge}){
    const [opensidemenu,setOpensidemenu]=useState(false);
    return (
        <>
        <Topbar  setOpensidemenu={setOpensidemenu} />
        <Sidemenu opensidemenu={opensidemenu}  setOpensidemenu={setOpensidemenu}
         setbackgroundIamge={setbackgroundIamge} />
        </>
    )
}
export {Navigition}