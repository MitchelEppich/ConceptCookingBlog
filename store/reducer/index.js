/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

const initialState = {
  step: 1,
    recipe:{
    featuredImage: "https://natalietamara.co.uk/wp-content/uploads/2017/11/Creamy-Pan-Fried-Gnocchi-Vegan-recipe-3.jpg",
    title: "Marijuana Maple Bacon",
    subtitle: "Wrapped in Maple Bacon and Sleepy Time Butter",
    rating: "4",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    prepTime: "20",
    difficulty: "Novice",                      
    stepCard: [
      {img: "https://thefreshtoast.com/wp-content/uploads/2016/09/weed-breathalyzer.jpg",
      stepText: "1st It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    } ,
      {img: "https://media.merryjane.com/Z5pIJDjv75oy3vvW1KZEn2h8bVg=/0x500/files.merryjane.com/uploads/article/hero_image/386/114_0393-.jpg",
      stepText: "2th We want our children to display horizontally, so we’re going to wrap the children in a CarouselContainer component. The margin on this component gives the effect of the carousel overflowing to the right-hand side of the page."
    } ,
      {img: "https://thefreshtoast.com/wp-content/uploads/2016/09/weed-breathalyzer.jpg",
      stepText: "3th It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
     
    }],
    ingredients: [
      "30 g marijuana",
      "15 Slices of Bacon",
      "150 ml of olive oil",
      "4 tomatoes",
      "50 ml of Maple"                            
    ],
  }
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODIFY_STEP:
      return updateObject(state, {
        step: state.step + action.val
      })
    // case actionTypes.MODIFY_STEP: // BASE CASE
    //   return updateObject(state, {})
    default:
      return state;
  }
};

export default indexReducer
// export default combineReducers({
// });
