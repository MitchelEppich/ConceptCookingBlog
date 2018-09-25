import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import RecipeItem from "./RecipeItem";



const RecipeCards = props => {        
    
    let amtItems = 4;

    let showRecipeItem = () => {
            let arr = [];
            let moreRecipes = props.recipes;
            for (let i = 0; i < 4; i++){          
                // if (i < 4){
                arr.push(<RecipeItem  
                    imgsrc={props.recipes[i].featuredImage}
                    subtitle={`${props.recipes[i].title} ${props.recipes[i].subtitle}`}
                    prepTime={`${props.recipes[i].prepTime} M`} 
                    key={i}
                    index={i} 
                    getCurrentRecipe={props.getCurrentRecipe}
                    rating={props.recipes.rating}                   
                />)
                //  else {
                //     arr.push(<RecipeItem                      
                //     imgsrc={props.recipes[i].featuredImage}
                //     subtitle={`${props.recipes[i].title} ${props.recipes[i].subtitle}`}
                //     prepTime={`${props.recipes[i].prepTime} M`} 
                //     key={i}
                //     index={i} 
                //     getCurrentRecipe={props.getCurrentRecipe}
                //     rating={props.recipes.rating}                   
                // />)
                   
                // }          
                } return arr ;
             }
             


             let showMoreRecipes = () => {            
             let moreRecipes = props.recipes;
             let arr = [];                                  
             for (let i = 4; i < 8; i++){           // show all -> moreRecipes.length
                 arr.push(<RecipeItem  
                     imgsrc={props.recipes[i].featuredImage}
                     subtitle={`${props.recipes[i].title} ${props.recipes[i].subtitle}`}
                     prepTime={`${props.recipes[i].prepTime} M`} 
                     key={i}
                     index={i} 
                     getCurrentRecipe={props.getCurrentRecipe}
                     rating={props.recipes.rating}                   
                 />)                                    
                 } return arr;         
                }   
                


                
        let loadMoreSection = null;  
           
        return (
            
            <Layout>
                <div className="more-recipes">
                
                   {showRecipeItem()}
                   <div ref={(loadMore)=>{loadMoreSection = loadMore}} className="load-more-section hidden">
                   {showMoreRecipes()}
                   </div>                  
                  
                  
                </div>
                <div className="flex justify-center">
                    <button className="load-more-button" onClick={()=> {
                    //   let loadMoreSection = document.querySelector("#load-more-section");                   
                      loadMoreSection.classList.remove("hidden")                    
                    }}>More Baked Treats</button>
                </div>    
            </Layout>
            
        );
    }


export default RecipeCards;