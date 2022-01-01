import React from "react";
import {MdSearch} from 'react-icons/md'

function Search({handleSearchtext}){
    return(
        <>
        <div className="search">
        <MdSearch className="search-icon " siz="1.3em"/>
        <input type="text" placeholder =" type to search ..."
        onChange={(event)=> handleSearchtext(event.target.value)}
        />
        </div>
        </>
    )
}
export {Search}