/* eslint-disable no-lone-blocks */
import React from 'react'
import { AppBar, Toolbar } from "@mui/material";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";




function Tableboard(props){
    return (
        <>
        {/*  */}
        <AppBar
        position="static"
        style={{ background: "None", padding: "0.5rem" }}
      >
        <Toolbar>
          <h3 style={{flexGrow: 1, }}></h3>

          <Link to={"/Wrapper"}           
          >
          <Button
            style={{
              backgroundColor: "rgb(255, 125, 133)",
              color:"white",
              border: "transparent",
              padding: "0.5em",
              borderRadius: "0.5em",
              textDecoration:"none",
              fontWeight:"500",
             
      
            }}
          
          
          >
            <span
            style={{
              margin:"0.5em",
            }}
            >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
              </span>
            To kanban board
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
        {/*  */}
        {/*  */}
          <div className="py-4">
          {props.location.state.listIds.map((listId , index)=>{
            const list = props.location.state.lists[listId];
          return(
            <div>
            <table className="table table-borderless table-hover m-0">
                        <thead className="">
                         <tr>
                          <th  className="table-danger w-25" >In {list.title} list with title cards   </th>
                          <th scope="col" className="text-center table-info w-25">priority</th>
                          <th scope="col" className="text-center table-warning w-25"  >Current day</th>
                          <th scope="col" className="text-center table-dark" >End task day</th>
                         </tr>
                         </thead>

            {list.cards.map((card ,index)=>{
              //  console.log(card, "ttttttttttttttttttttttttttttttttttttttttttt")
              //  console.log(card.title,"uuuuuuuuuuuuuuuuuuuuuuuuuuu")
                    return (
                      <tbody>
                         <tr>
                  
                          <td className="w-25 ">{index+1}) {card.title}</td>
                          <td className="w-25 text-center ">{card.priority}</td>
                          <td className="text-center " >{card.date} </td>
                          <td  className=" text-center">{card.taskdate} </td> 
                         </tr>
                      </tbody>
                    )
                  })}
        </table>
                </div>
          )
          
        })}
        
        </div> 
        </>
    )
}
export {Tableboard}


