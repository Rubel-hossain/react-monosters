import React from "react";
import "./card.css";

const Card = (props)=>{

    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.monester.id}?set=set2&size=180x180`} alt=""/>
            <h3>{props.monester.name}</h3>
            <p>{props.monester.email}</p>
        </div>
    );
}

export default Card;