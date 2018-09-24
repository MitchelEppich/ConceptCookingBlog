import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const Features = props => {   
    
    let slideFeatures = () => {
       let slider = props.slider-1; 
       let featuresImg = props.featuresSlide[slider].featuresImg;
       let featuresTitle = props.featuresSlide[slider].featuresTitle;
       let featuresSubtitle = props.featuresSlide[slider].featuresSubtitle;
       let featuresTextLink = props.featuresSlide[slider].featuresTextLink;
       let featuresLink = props.featuresSlide[slider].featuresLink;  
        return (
                <div className="features-section">
                    <img src={featuresImg} alt="Weed Brownies" className="features-image" />
                    <div className="features-info">
                        <span className="features-title">{featuresTitle}</span>
                        <p className="features-subtitle">{featuresSubtitle}</p>
                        <a href={featuresLink}>{featuresTextLink}</a>
                    </div> 
                </div>
            );      
    }

    let bulletSlider = () => {
        let arr = [];         
        let counter = 0;
        while (counter < props.featuresSlide.length) {
            if (counter < props.slider) {
                arr.push(<a key={counter} onClick={() => {
                    if (props.slider > 1) {                        
                        props.modifySlider(-1) }}}><span key={counter} className="bullet-slider-active"></span></a>)
            } else {
                arr.push(<a key={counter} onClick={() =>  {
                    if (props.slider < props.featuresSlide.length) {
                        props.modifySlider(1) }}}><span key={counter} className="bullet-slider"></span></a>)
                   }
                counter++
        } 
        return arr
    }

        return (
            <Layout>
                <div className="feature-arrow-left z-50 cursor-pointer">
                    <a onClick={() => {
                        
                        if (props.slider > 1) {                        
                            props.modifySlider(-1) 
                        } else { 
                                props.modifySlider(2)}
                            }}>
                        <span className="arrows-slider"><i className="fas fa-angle-left"></i></span>
                    </a>
                </div>
                {slideFeatures()}
                <div className="feature-arrow-right cursor-pointer">
                    <a onClick={() =>  {
                        if (props.slider < props.featuresSlide.length) {
                            props.modifySlider(1)
                        } else { 
                                props.modifySlider(-2)}
                            }}> 
                        <span className="arrows-slider"><i className="fas fa-angle-right"></i></span>
                    </a>
                </div>
                <div className="bullet-section">
                        {bulletSlider()}
                </div>

            </Layout>
        );
    }

 
export default Features;