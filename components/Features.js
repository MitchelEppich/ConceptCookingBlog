import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const Features = props => {    
        return (
            <Layout>
                <div className="features-section">
                    <img src="https://quantum9.net/wp-content/uploads/2017/08/Image_1.jpg" alt="Weed Brownies" className="features-image" />
                    <div className="features-info">
                        <span className="features-title">Brownies with a Double Dose of Chocolate</span>
                        <p className="features-subtitle">Not Just Your Grandmothers Brownies</p>
                        <a href="#">GET BAKING</a>
                    </div>
                </div>
            </Layout>
        );
    }


export default Features;