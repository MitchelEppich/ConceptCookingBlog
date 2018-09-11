import React, { Component } from "react";


const Links = props => {
    return <h4 className="link-list"><a className="link-item" href={props.url}>{props.textLink}</a></h4>
}

export default Links;