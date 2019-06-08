import React from "react";


const ServiceCard = (props) => (
    <div className="col-lg-4 col-md-6">
        <div className="service-box">
            <div className="sb-icon">
                <div className="sb-img-icon">
                    <img src={props.image} alt={props.imageAlt}/>
                </div>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link} className="readmore">READ MORE</a>
        </div>
    </div>
);

export default ServiceCard;