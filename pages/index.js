/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Header from "../container/Header";
import SearchBar from "../container/SearchBar";
import Features from "../container/Features";
import MoreRecipes from "../container/MoreRecipes";
import RecipeCards from "../container/RecipeCards";



class Index extends Component {
  render() {
    return (
      <Layout >
        <Header icon="far fa-utensils icon"/>        
        <SearchBar/>
        <Features />
        <MoreRecipes />
        <RecipeCards />
        
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
