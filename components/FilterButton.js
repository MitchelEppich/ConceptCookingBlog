import React, { Component } from 'react';

const filterButton = (props) => {
    return (        
            <button className="small-btn text-button"><i className={`icon-button ${props.icon}`}></i> {props.title}</button>
        
    )
}

export default filterButton;