import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import RecipeItem from "./RecipeItem";



const RecipeCards = props => {        
    
    let showRecipeItem = () => {
            let arr = [];
            for (let i = 0; i < 4; i++){          
                arr.push(<RecipeItem  
                    imgsrc={props.recipes[i].featuredImage}
                    subtitle={`${props.recipes[i].title} ${props.recipes[i].subtitle}`}
                    prepTime={`${props.recipes[i].prepTime} M`} 
                    key={i}
                    index={i} 
                    getCurrentRecipe={props.getCurrentRecipe}
                    rating={props.recipes.rating}                   
                />)          
                } return arr 
             }
             
    
    // let loadMore = () => {
    // let arr = [];
    // for (let i = 4; i < 8; i++){          
    //     arr.push(
    //     <RecipeItem  
    //         imgsrc={props.recipes[i].featuredImage}
    //         subtitle={`${props.recipes[i].title} ${props.recipes[i].subtitle}`}
    //         prepTime={`${props.recipes[i].prepTime} M`} 
    //         key={i}
    //         index={i} 
    //         getCurrentRecipe={props.getCurrentRecipe}
    //         rating={props.recipes.rating}                   
    //     />)          
    //     } return arr 
    // }
      
    
        return (
            
            <Layout>
                <div className="more-recipes">
                
                   {showRecipeItem()}
                  
                  
                </div>
                <div className="flex justify-center">
                    <button className="load-more-button"> More Baked Treats</button>
                </div>    
            </Layout>
            
        );
    }


export default RecipeCards;