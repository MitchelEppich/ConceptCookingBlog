import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import MoreRecipes from "./MoreRecipes";

const RecipeItem = props => {
    return (
        
        <div className="recipe-item" onClick={()=> console.log(props.currentRecipe)}>
            <img className="img-card-recipe" src={props.imgsrc}/>
            <div className="time-preparation">
                <div className="clock-preparation"><i className="far fa-clock"></i></div>
                <p className="text-preparation">{props.prepTime}</p>
               
                
                
            </div>
            <p className="recipe-subtitle">{props.subtitle}</p>
        </div>
    )
}

export default RecipeItem;