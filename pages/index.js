/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout >
        <div>Adam loves Mitchel</div>
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
