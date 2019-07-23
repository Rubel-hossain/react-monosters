import React from "react";
import "./card_list.css";
import Card from "../Card/Card";

const CardList = (props)=>{

    return(
        <React.Fragment>
         <div className="card-list"> 
         {props.monosters.map(monester=>{
            return(
              <div className="card-list-item" key={monester.id}>
                 <Card monester={monester}/>
              </div>
            )
          })}
         </div>
        </React.Fragment>

    );
}

export default CardList;