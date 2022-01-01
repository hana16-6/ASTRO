import { Drawer, Grow } from '@mui/material'
import React, { useState }  from 'react'
import { colors } from '../uitilty/color'
import { images } from '../uitilty/images'
import "./main.css"

function Sidemenu({opensidemenu,setOpensidemenu,setbackgroundIamge }){
    const [openoptioncolor,setOpenoptioncolor]=useState(false)
    const [openoptionimage,setOpenoptionimage]=useState(false)
    // const[image,setImage]=useState([])

    return(
        <>
        <Drawer open={opensidemenu} anchor='right' onClose={()=>setOpensidemenu(false)}>
            <div
            style={{
            width:"18em"
            }}>
                <div className="menu">
                    <div className="box" 
                    style={{
                        backgroundImage:"url(https://img.freepik.com/free-vector/desert-landscape-background-video-conferencing_23-2148653793.jpg?size=626&ext=jpg&uid=R58025147&ga=GA1.2.1784089368.1637009302)",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                    }}
                    onClick={()=>{setOpenoptionimage(true)}}

                    ></div>
                    <div className="box"
                    style={{
                        backgroundImage: "url(https://lh5.googleusercontent.com/feyS3FWAXKa6AME5VwBtL-m985_1GjwC0jniZCe3az3LTdY0Vkyi1wVpZKPXslwSP4B0n2XuSlnO4WFaQX6arPnQbM1xLkLCJ7eXhg4_takJTYx2ELp9FvLEpDckmbgrFYlJ8YW6)",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover"
                    }}
                    onClick={()=>{
                        setOpenoptioncolor(true);
                        setOpenoptionimage(false);
                    }}
                    ></div>
                </div>
                {/* <Divider/> */}
                {openoptionimage ?
                  <Grow in={openoptionimage}>
                  <div className="optioncolor">
                     {images.map((image ,index)=>{
                          return(
                             <div className="box"
                             key={index}
                             style={{
                                backgroundImage: `url(${image})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover"
                            }}
                             onClick={()=>{setbackgroundIamge(image)}}
                             ></div>
                          )
                     })}
                  </div>
                  </Grow>   
                :
                <Grow in={openoptioncolor}>
             <div className="optioncolor">
                {colors.map((color ,index)=>{
                     return(
                        <div className="box"
                        key={index}
                        style={{
                            backgroundColor:color,
                        }}
                        onClick={()=>{setbackgroundIamge(color)}}
                        ></div>
                     )
                })}
             </div>
             </Grow>               
            }
           {/*  */}   

            </div>

        </Drawer>
        </>
    )
}

export{Sidemenu}