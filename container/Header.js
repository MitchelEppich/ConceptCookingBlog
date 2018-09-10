import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const Header = props => {    
        return (
            <Layout>
                <div className="header">
                    <span>
                        <i className={props.icon}></i>
                    </span> 
                    <h1 className="site-title">Marijuana Cooking Book</h1>                             
                </div>
            </Layout>
        );
    }


export default Header;