import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import FilterButton from "./FilterButton";


const MoreRecipes = props => {        
        return (           
            
            <Layout>
                <div className="more-features">
                    <h3 className="more-features-title">{props.moreRecipesTitle}</h3>
                    <FilterButton icon="far fa-cannabis" title="Powerfull" />
                    <FilterButton icon="far fa-utensil-spoon" title="Simple" />
                    <FilterButton icon="fa fa-function" title="Advanced" />                    
                    <FilterButton icon="fal fa-band-aid" title="Decadent" />
                </div>                
            </Layout>
            
        );
    }

    
export default MoreRecipes;