import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import ImageHeader from "../components/ImageHeader";
import ContainerRecipe from "../components/ContainerRecipe";

const RecipeSection = props => {    
        return (
            <Layout>
                <ImageHeader srcUrl="https://8zxa3etwpf-flywheel.netdna-ssl.com/wp-content/uploads/FOK_Coliflower8384-WP.jpg" />
                    <div>
                        <ContainerRecipe recipe={props.recipe} subtitle={props.subtitle}/>
                    </div>                             
                
            </Layout>
        );
    }


export default RecipeSection;