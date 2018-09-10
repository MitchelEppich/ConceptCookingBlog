import React, { Component } from 'react';

const Recipe = (props) => {
    return (
        <div>
            <img className="img-card-recipe" src={props.imgsrc}/>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Recipe;