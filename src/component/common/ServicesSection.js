import React from 'react';

import crossedAxeIcon from "../../img/braveart/crossedLumberjackAxes/crossed-lumberjack-axes-icon-cut.jpg";
// import darkIcon4 from "../../img/icon/dark/4.png";
import darkIcon5 from "../../img/icon/dark/5.png";
import darkIcon6 from "../../img/icon/dark/6.png";

const ServicesSection = (props) => (

    <section className="service-section spad">
        <div className="container">
            <div className="section-title">
                <h2>Services</h2>
            </div>
            <div className="row">
                <Service
                    title = "Skyscraper Buildings"
                    description = "Some Info on Sky Scrapers"
                    image = {crossedAxeIcon}
                    imageAlt = "pic of project"
                    link = "#"
                />
                <Service
                    title = "Documentation"
                    description = "Some info on Documentation"
                    image = {darkIcon5}
                    imageAlt = "pic of project"
                    link = "#"
                />
                <Service
                    title = "Restauration Projects"
                    description = "Some info on Restaurants project"
                    image = {darkIcon6}
                    imageAlt = "pic of project"
                    link = "#"
                />
            </div>
        </div>
    </section>
);

const Service = (props) => (
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

export default ServicesSection;