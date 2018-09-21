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

class Popup extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
        <ContainerRecipe 
          modifyStep={this.props.modifyStep}
          modifyServing={this.props.modifyServing}
          serving={this.props.serving}
          recipe={this.props.recipe[0]}
          step={this.props.step}
          stepTotal={this.props.recipe[0].stepCard.length}
        />
    );
  }
}

export default Popup;