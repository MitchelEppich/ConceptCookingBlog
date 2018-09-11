import React, { Component } from 'react';
import Layout from "../HOC/Layout";

const Info = props => {
    return (
        <Layout>
            <div className="info-section">
                <h3 className="info-subtitle">{props.subtitle}</h3>
                <h2 className="info-title">{props.title}</h2>
                <a href="{props.url}">{props.urlText}</a>
            </div>
        </Layout>
    )
}

export default Info;