import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import RecipeItem from "./RecipeItem";

const RecipeCards = props => {    
        return (
            <Layout>
                <div className="more-recipes">
                   <RecipeItem 
                        imgsrc="../../static/img/img1.jpg"
                        subtitle="This is a special recipe that will make you be crazy" 
                   />  
                   <RecipeItem 
                        imgsrc="../../static/img/img2.jpg"
                        subtitle="This is a special recipe that will make you be crazy" 
                   />
                   <RecipeItem 
                        imgsrc="../../static/img/img3.jpg"
                        subtitle="This is a special recipe that will make you be crazy" 
                   />
                   <RecipeItem 
                        imgsrc="../../static/img/img4.jpg"
                        subtitle="This is a special recipe that will make you be crazy" 
                   />                 
                </div>
                <div className="flex justify-center">
                    <button className="load-more-button">More Baked Treats</button>
                </div>    
            </Layout>
        );
    }


export default RecipeCards;