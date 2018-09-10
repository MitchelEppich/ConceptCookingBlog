import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import FilterButton from "../components/FilterButton";

const MoreRecipes = props => {    
        return (
            <Layout>
                <div className="more-features">
                    <h3>Pot Poppers</h3>
                    <FilterButton title="Powerfull" />
                    <FilterButton title="Simple" />
                    <FilterButton title="Advanced" />
                    <FilterButton title="Decadent" />
                </div>
            </Layout>
        );
    }


export default MoreRecipes;