/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import MoreRecipes from "../components/MoreRecipes";
import RecipeCards from "../components/RecipeCards";
import Info from "../components/Info";
import Contact from "../components/Contact";

import RecipeSection from "../components/RecipeSection";

class Index extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Layout >
         <Header 
            icon="far fa-utensils icon"
            siteName="Marijuana Cooking Book"
        />        
        <SearchBar 
            icon="far fa-search"
            placeholder="Search for anything..."
        />
        <RecipeSection 
          modifyStep={this.props.modifyStep}
          recipe={this.props.recipe}
          step={this.props.step}
          stepTotal={this.props.recipe.stepCard.length}
          />
        
        
        
        
        
        
        {/* <Features  />
        <MoreRecipes 
        moreRecipesTitle="Pot Poppers"
        />
        <RecipeCards />
        <Info 
        subtitle="Need more recipes?" 
        title="Check out our Grow Reel episodes for more information."
        url="#"
        urlText="Our Reel" />
        <Contact /> */}
        
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modifyStep: (val) => dispatch(actions.modifyStep(val))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
