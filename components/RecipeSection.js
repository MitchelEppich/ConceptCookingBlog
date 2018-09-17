import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import ContainerRecipe from "../components/ContainerRecipe";


const RecipeSection = props => {    
        return (
            <Layout>
                <ContainerRecipe {
                    ...props
                }
               
                />
            </Layout>
        );
    }


export default RecipeSection;