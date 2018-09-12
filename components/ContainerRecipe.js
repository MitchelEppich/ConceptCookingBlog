import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const ContainerRecipe = props => {
    let showIngredients = () => {
        let arr = [];
        for (let i of props.recipe.ingredients) {
            arr.push(<span key={i} className="list-ingredients"><input className="ingredients-checkbox" type="checkbox" />{i}</span>)
        }
        return arr
    }

    let showRating = () => {
        let arr = [];       
        let counter = 0;
        while (counter < 5) {
            if (counter < props.recipe.rating) {
                arr.push(<i key={counter} className="fas fa-cannabis rating-icons"></i>)
            } else {
                arr.push(<i key={counter} className="far fa-cannabis rating-icons"></i>)
            }
                counter++
        }    
        return arr        
    }


    let stepsRecipe = () => {
        let arr = [];
        let counter = 0;
        while (counter < props.recipe.stepTotal) {
            if (counter < props.recipe.step) {
                arr.push(<span key={counter} className="progress-item item-fulled"></span>)
            } else {
                arr.push(<span key={counter} className="progress-item"></span>)
            }
                counter++
        } 
        return arr
    }


    return (        
        <Layout>
            <div>
                <img className="background-img" src={props.recipe.featuredImage} />
            </div>
            <div className="container">                
                <h1 className="title-recipe">{props.recipe.title}</h1>
                <i className="fal fa-print print-icon"></i>
           
                <p className="subtitle-recipe">&mdash; {props.recipe.subtitle}</p>
                <div className="rating-icons">
                    {showRating()}
                    <p className="small-text-rating">{props.recipe.rating}<span className="small-text-rating"><small>/5 </small></span><span className="mini-text-rating"> ENJOY</span></p>                    
                </div>
                <hr/>

                <div className="flex mb-4">
                    <div className="w-4/5 h-12 container-area">
                        <p className="description-recipe"> {props.recipe.description}</p>
                        <hr />

                        <div className="carousel-component">
                            <div className="arrow-left"><a onClick={() => {
                                if (props.recipe.step > 1) {
                                    props.modifyStep(-1)
                                }
                              }}>
                            <i className="fas fa-arrow-left"></i></a></div>
                            
                        
                            <div className="carousel-steps">
                                <div className="img-steps">                                
                                    <img className="img-steps" src={props.recipe.stepImg}/>
                                </div>
                                <div className="text-recipe-steps">
                                    <h4 className="step-number-text">Step {props.recipe.step}</h4>
                                    <p>{props.recipe.stepText}</p>                               
                                </div>                            
                            </div>
                            <div className="arrow-right"><a onClick={() =>  {
                                 if (props.recipe.step < props.recipe.stepTotal) {
                                    props.modifyStep(1)
                                }
                            }}><i className="fas fa-arrow-right"></i></a></div>

                        </div>

                        <div className="progress-bar"> 
                            
                            {stepsRecipe()}                            

                        </div>
                                               
                        
                    </div>
                    <div className="w-2/5 h-12 sidebar-area">
                        <div className="details-section">                        
                            <div className="details-recipe">Preparation Time <span className="details-items">{props.recipe.prepTime} Minutes</span></div>
                            <div className="details-recipe">Cooking Difficulty <span className="details-items">{props.recipe.difficulty}</span></div>
                        </div>
                        <hr/>
                        <div className="serving-section">
                            <div className="serving-recipe">Serving</div>
                            <div className="input-serving-section">
                                <button className="input-serving">+</button>
                                <input className="input-serving" maxLength="2" size="2"></input>
                                <button className="input-serving">-</button>
                            </div>
                        </div>
                        <hr/>
                        {showIngredients()}
                    </div>
                </div> 


               
            </div>
        </Layout>
    );
}

export default ContainerRecipe;