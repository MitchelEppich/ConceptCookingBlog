import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const SearchBar = props => {
        return (
            <Layout>
                <div className="search-section">
                    <hr/>
                        <i className="fas fa-search"></i>
                        <input className="input-search" placeholder="Search for anything..."></input>
                    <hr/>
                </div>
            </Layout>
        );
    }

export default SearchBar;