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
  step: 1
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
