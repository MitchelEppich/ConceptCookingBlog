import React, { Component } from 'react';

const filterButton = (props) => {
    return (
        <button className="small-btn"><i className={props.icon}></i> {props.title}</button>
    )
}

export default filterButton;