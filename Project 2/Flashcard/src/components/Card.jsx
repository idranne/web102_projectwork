import React from "react";
import "./Card.css"

//card component 

function Card({question, answers, image}){
    return (
        <div className="elements">
        <h1 className="questions">{question}</h1>
        <h2 className="answers">{answers}</h2>
        <h2>{image}</h2>
     </div>
        
    )

}