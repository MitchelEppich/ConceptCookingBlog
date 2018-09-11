import React, { Component } from 'react';

const RecipeItem = (props) => {
    return (
        <div className="recipe-item">
            <img className="img-card-recipe" src={props.imgsrc}/>
            <p className="recipe-subtitle">{props.subtitle}</p>
        </div>
    )
}

export default RecipeItem;