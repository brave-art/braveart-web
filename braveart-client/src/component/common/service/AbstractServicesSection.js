import React from 'react';

const AbstractServicesSection = (props) => (

    <section className="service-section spad">
        <div className="container">
            <div className="section-title">
                <h2>{props.title}</h2>
            </div>
            <div className="row">
                {props.serviceCards}
            </div>
        </div>
    </section>
);

export default AbstractServicesSection;