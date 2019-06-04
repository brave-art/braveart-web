import React from 'react';

import crossedAxeIcon from "../../img/braveart/crossedLumberjackAxes/crossed-lumberjack-axes-icon-cut.png";
import puzzleIcon from "../../img/braveart/puzzle Icon/puzzle-icon.svg";
import questionMarkIcon from "../../img/braveart/puzzle Icon/question-mark-icon.svg";

const ServicesSection = (props) => (

    <section className="service-section spad">
        <div className="container">
            <div className="section-title">
                <h2>Services</h2>
            </div>
            <div className="row">
                <Service
                    title = "Axe Throwing"
                    description = "Information on axe throwing leagues, rentals and events"
                    image = {crossedAxeIcon}
                    imageAlt = "Crossed Axes"
                    link = "#/axe-throwing"
                />
                <Service
                    title = "Escape Rooms"
                    description = "Coming Soon!"
                    image = {puzzleIcon}
                    imageAlt = "Puzzle Icon."
                    link = "#/escape-room"
                />
                <Service
                    title = "More?"
                    description = "Brave Art will be offering two new services in the near future. Follow us on social media or subscribe to our mailing list to be the first ot know!"
                    image = {questionMarkIcon}
                    imageAlt = "Question mark icon."
                    link = "#/news"
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