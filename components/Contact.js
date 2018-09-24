import React, { Component } from 'react';
import Layout from "../HOC/Layout";
import Links from "./Links";

const Contact = props => {
    let emailField = null;
    return (
        <Layout>
            <div className="contact-section">
                <div className="links-section">
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
                    <input type="text" className="w-full h-full bg-transparent" ref={(inputEmail)=>{emailField = inputEmail}} name="email" placeholder="Insert your email"></input>
                    <button onClick={()=>{
                        
                        console.log(emailField.value)
                    }}>
                    <i className="fas fa-arrow-right"></i>
                    </button>
                </div>                
            </div>           
        </Layout>
    )
}

export default Contact;