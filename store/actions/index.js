/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

// const uri = `https://growreel-dev.herokuapp.com:443/graphql`;
// const uri = "http://localhost:3000/graphql";
// const uri = "http://192.168.0.43:3000/graphql";
const uri = "http://localhost:3000/graphql";

const imports = {
};

const actionTypes = {
  MODIFY_STEP:"MODIFY_STEP"
};

const actions = {
  modifyStep: (val) => {
    return {
      type: actionTypes.MODIFY_STEP,
      val: val
    }  
  }
};

const query = {
};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};