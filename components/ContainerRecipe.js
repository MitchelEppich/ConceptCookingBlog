/** DISPLAY THE CURRENT RECIPE CONTENT **/


import React, { Component } from 'react';
import Layout from "../HOC/Layout";

let print = () =>{
    window.print()
}

const ContainerRecipe = props => {  

    if(props.currentRecipe != null) {
    let recipe = props.currentRecipe == null ? props.recipes[0]: props.recipes[props.currentRecipe];

    let containerStyle = props.currentRecipe == null ? {
        transform: "translateX(-100vw)",
        transition: "all 0.5s ease",
        position: "absolute"
    } :
    {
        transform: "translateX(0)",
        transition: "all 0.5s ease"
    };

    let showIngredients = () => {
        let arr = [];
        for (let i of recipe.ingredients) {
            let str = `${i.amt * props.serving} ${i.metric} ${i.description} `;
            arr.push(<span key={i.description} className="list-ingredients">
            <input className="ingredients-checkbox" type="checkbox" />{str}</span>)            
        }
        return arr
    }

    
   
    let showStepCard = () => {        
        let step = props.step-1; 
        let img = recipe.stepCard[step].img; 
        let text = recipe.stepCard[step].stepText; 
             return (
                <div className="carousel-steps">
                    <div className="img-steps">                                
                        <img className="img-steps" key={step} src={img} />
                    </div>
                    <div className="text-recipe-steps">
                        <h4 className="step-number-text">Step {props.step} of {recipe.stepCard.length}</h4>
                        <p className="text-recipe-steps">{text}</p>
                    </div>                            
                </div>
             )                             
      }  


    let showRating = () => { 
        let arr = [];       
        let counter = 0;        
        while (counter < 5) {
             if (counter < recipe.rating){
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
        while (counter < recipe.stepCard.length) {
            if (counter < props.step) {
                arr.push(<span key={counter} className="progress-item progressed-item"></span>)
            } else {
                arr.push(<span key={counter} className="progress-item"></span>)
                
            }
                counter++
        } 
        return arr
    }
  
    return (        
        <Layout>
        <div className="z-50" style={containerStyle}>
            <div>                
                <img className="background-img" src={recipe.featuredImage} />
            </div>
            <div className="container z-50">                
                <div className="header-recipe">
                    <h1 className="title-recipe">{recipe.title}</h1>
                    <p onClick={()=> {props.getCurrentRecipe(null)
                        }}><i className="fas fa-times close-icon"></i>
                    </p>
                    <p onClick={() => {window.print()}}>
                        <i className="fal fa-print print-icon" ></i>
                    </p>
                </div>
                <p className="subtitle-recipe">&mdash; {recipe.subtitle}</p>
                <div className="rating-icons">
                {showRating()}                  
                    <p className="small-text-rating">{recipe.rating}<span className="small-text-rating"><small>/5 </small></span><span className="mini-text-rating"> ENJOY</span></p>                    
                </div>
                <hr/>

                <div className="flex mb-4">
                    <div className="w-4/5 h-12 container-area"> 
                        <p className="description-recipe">{recipe.description}</p>
                        <hr />

                        <div className="carousel-component">
                            <div className="arrow-left cursor-pointer">
                                <a onClick={() => {
                                    if (props.step > 1) {
                                        props.modifyStep(-1) }}}>                                
                                    <i className="fas fa-arrow-left"></i>
                                </a>
                            </div>                          

                            {showStepCard()}

                            <div className="arrow-right cursor-pointer">
                                <a onClick={() =>  {
                                    if (props.step < recipe.stepCard.length) {
                                        props.modifyStep(1);  }}}>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="progress-bar">
                            {stepsRecipe()}
                        </div>                                              

                    </div>
                    <div className="w-2/5 h-12 sidebar-area">
                        <div className="details-section">                        
                            <div className="details-recipe">Preparation Time <span className="details-items">{recipe.prepTime} Minutes</span></div>
                            <div className="details-recipe">Cooking Difficulty <span className="details-items">{recipe.difficulty}</span></div>
                        </div>
                        <hr/>
                        <div className="serving-section">
                            <div className="serving-recipe">Serving</div>
                            <div className="input-serving-section">
                                <a className="input-serving cursor-pointer" onClick={() => {                                   
                                        props.modifyServing(1);  }}>                                  
                                    <i className="fas fa-plus"></i>
                                </a>                                
                                    
                                <p className="display-quantity" id="countServing"> {props.serving} </p>
                                
                                <a className="input-serving cursor-pointer" onClick={() => {
                                    if (props.serving > 1) {
                                        props.modifyServing(-1); } }}>
                                    <i className="fas fa-minus"></i>
                                </a>
                            </div>
                        </div>
                        <hr/>
                        {showIngredients()}
                    </div>
                </div>                                             
            </div>
        </div>
        </Layout>
        
    ); } else { return null }
}

export default ContainerRecipe;