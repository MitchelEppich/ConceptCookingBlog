import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const SearchBar = props => {
        return (
            <Layout>
                <div className="search-section">
                    <hr/>
                        <i className={`search-icon ${props.icon}`}></i>
                        <input className="input-search" placeholder={props.placeholder}></input>
                    <hr/>
                </div>
            </Layout>
        );
    }

export default SearchBar;