import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import Recipe from "../components/Recipe";

const RecipeCards = props => {    
        return (
            <Layout>
                <div className="recipe-cards">
                   <Recipe imgsrc="https://weedistry.com/wp-content/uploads/2017/06/cannabis-brownies-recipe-mcig.jpg" />                     
                </div>
            </Layout>
        );
    }


export default RecipeCards;