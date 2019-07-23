import React from "react";
import "./search.css";

const Search = ({searchHandle})=> {

    return(
        <React.Fragment>
           <div className="search-box"> 
             <input className="search" type="search" onChange={searchHandle} placeholder="Search Here..."/>
           </div>
        </React.Fragment>
    );
}

export default Search;