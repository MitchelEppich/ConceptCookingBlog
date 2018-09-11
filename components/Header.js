import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const Header = props => {    
        return (
            <Layout>
                <div className="header">
                    <span className="icon">
                        <i className={props.icon}></i>
                    </span> 
                    <h1 className="site-title">{props.siteName}</h1>                             
                </div>
            </Layout>
        );
    }


export default Header;