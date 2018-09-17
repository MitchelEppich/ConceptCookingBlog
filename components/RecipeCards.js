import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import RecipeItem from "./RecipeItem";



const RecipeCards = props => {        
    
    let showRecipeItem = () => {
        let arr = [];
        for (let i = 0; i < 4; i++){            
            arr.push(<RecipeItem 
                imgsrc={props.recipe[i].featuredImage}
                subtitle={`${props.recipe[i].title} ${props.recipe[i].subtitle}`}
                prepTime={`${props.recipe[i].prepTime} M`} 
                key={i}
                currentRecipe={i}
                                             
           />)            
        } return arr
    }

        return (
            
            <Layout>
                <div className="more-recipes">
                
                   {showRecipeItem()}
                  
                </div>
                <div className="flex justify-center">
                    <button className="load-more-button">More Baked Treats</button>
                </div>    
            </Layout>
            
        );
    }


export default RecipeCards;