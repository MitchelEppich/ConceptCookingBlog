import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const ContainerRecipe = props => {
    return (
        <Layout>
            <div className="container">                
                <h1 className="title-recipe">Brasied Asparagus</h1>
                <i class="fal fa-print print-icon"></i>
           
                <p className="subtitle-recipe">&mdash; Wrapped in Maple Bacon and Sleepy Time Butter</p>
                <div className="rating-icons">
                    <i class="fas fa-cannabis rating-icons"></i>
                    <i class="fas fa-cannabis rating-icons"></i>
                    <i class="fas fa-cannabis rating-icons"></i>
                    <i class="fas fa-cannabis rating-icons"></i>
                    <i class="far fa-cannabis rating-icons"></i>
                    <p className="small-text-rating">4<span className="small-text-rating">/5 </span> <span className="mini-text-rating">ENJOY</span></p>                    
                </div>
                <hr/>

                <div className="flex mb-4">
                    <div className="w-4/5 h-12 container-area">
                        <p className="description-recipe">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>

                        <div className="carousel-steps">
                            <div className="img-steps">
                                
                                <img className="img-steps" src="https://natalietamara.co.uk/wp-content/uploads/2017/11/Creamy-Pan-Fried-Gnocchi-Vegan-recipe-3.jpg"/>
                            </div>
                            <div className="text-recipe-steps">
                                <h4>Step 01:</h4>
                                
                                <br/>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                                </p>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                                </p>
                            </div>                            
                        </div>
                        <div id="myProgress">
                                <div className="progressbar-recipe">100%</div>
                            </div>
                        
                        
                    </div>
                    <div className="w-2/5 h-12 sidebar-area">
                        <div className="details-section">                        
                            <div className="details-recipe">Preparation Time <span className="details-items">20 Minutes</span></div>
                            <div className="details-recipe">Cooking Difficulty <span className="details-items">Novice</span></div>
                        </div>
                        <hr/>
                        <div className="serving-section">
                            <div className="serving-recipe">Serving</div>
                            <div className="input-serving-section">
                                <button className="input-serving">+</button>
                                <input className="input-serving" maxlength="2" size="2"></input>
                                <button className="input-serving">-</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="list-ingredients">
                            <span className="list-ingredients"><input  type="checkbox" /> 25 Asparagus</span>
                            <span className="list-ingredients"><input  type="checkbox" /> 25 Slices of Bacon</span>
                            <span className="list-ingredients"><input  type="checkbox" /> 150 g margarine</span>
                            <span className="list-ingredients"><input  type="checkbox" /> 80 ml oil of choice</span>
                            <span className="list-ingredients"><input  type="checkbox" /> Pinch of sail</span>
                            <span className="list-ingredients"><input  type="checkbox" /> Dash of pepper</span>
                        </div>
                    </div>
                </div> 


               
            </div>
        </Layout>
    );
}

export default ContainerRecipe;