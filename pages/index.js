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
        <RecipeSection 
          modifyStep={this.props.modifyStep}
          recipe={{
            featuredImage: "https://natalietamara.co.uk/wp-content/uploads/2017/11/Creamy-Pan-Fried-Gnocchi-Vegan-recipe-3.jpg",
            title: "Marijuana Maple Bacon",
            subtitle: "Wrapped in Maple Bacon and Sleepy Time Butter",
            rating: "4",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            prepTime: "20",
            difficulty: "Novice",
            stepTotal: "7",
            stepImg: "https://natalietamara.co.uk/wp-content/uploads/2017/11/Creamy-Pan-Fried-Gnocchi-Vegan-recipe-3.jpg",
            step: this.props.step,
            stepText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            ingredients: [
              "30 g marijuana",
              "15 Slices of Bacon",
              "150 ml of olive oil",
              "4 tomatoes",
              "50 ml of Maple"                            
            ],
          }}/>
        
        
        
        
        
        
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
