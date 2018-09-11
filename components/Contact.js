import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import Links from "./Links";

const Contact = props => {
    return (
        <Layout>
            <div className="contact-section">
                <div className="contact-links">
                    <Links 
                        url="#"
                        textLink="Heighten Your"
                    />
                    <Links 
                        url="#"
                        textLink="Knowledge with"
                    /> 
                    <Links 
                        url="#"
                        textLink="Weekly Chef Tips"
                    />                   
                </div>
                <div className="contact-field flex justify-between">                
                    <input type="text" className="w-full h-full bg-transparent" placeholder="Insert your email"></input><i className="fas fa-arrow-right"></i>
                </div>                
            </div>
            <div className="copyright">by Mitchel Eppich</div>
        </Layout>
    )
}

export default Contact;