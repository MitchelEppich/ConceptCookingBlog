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
import RecipeItem from "../components/RecipeItem";
import RecipeCards from "../components/RecipeCards";
import Info from "../components/Info";
import Contact from "../components/Contact";
import ContainerRecipe from "../components/ContainerRecipe";

import RecipeSection from "../components/RecipeSection";
import Popup from "../components/Popup";

class Index extends Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

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
          <Features  />
          {/* <ContainerRecipe 
              modifyStep={this.props.modifyStep}
              modifyServing={this.props.modifyServing}
              serving={this.props.serving}
              recipe={this.props.recipe[3]}
              step={this.props.step}
              stepTotal={this.props.recipe[0].stepCard.length}
              />  */}
          <MoreRecipes 
            moreRecipesTitle="Pot Poppers"   
            currentRecipe={this.props.currentRecipe}   
          />
          <RecipeCards 
            {...this.props} 
          />
          <Info 
            subtitle="Need more recipes?" 
            title="Check out our Grow Reel episodes for more information."
            url="#"
            urlText="Our Reel" />
          <Contact />         
         
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modifyStep: (val) => dispatch(actions.modifyStep(val)),
    modifyServing: (val) => dispatch(actions.modifyServing(val)),
    currentRecipe: (val) => dispatch(actions.currentRecipe(val))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
