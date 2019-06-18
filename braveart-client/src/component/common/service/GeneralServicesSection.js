import React from 'react';

import crossedAxeIcon from "../../../img/braveart/crossedLumberjackAxes/crossed-lumberjack-axes-icon-cut.png";
import puzzleIcon from "../../../img/braveart/puzzle Icon/puzzle-icon.svg";
import questionMarkIcon from "../../../img/braveart/puzzle Icon/question-mark-icon.svg";
import ServiceCard from "./ServiceCard";
import AbstractServicesSection from "./AbstractServicesSection";


const GeneralServicesSection = (props) => (

    <AbstractServicesSection
        title={"Services"}
        serviceCards={[
            <ServiceCard
                title = "Axe Throwing"
                description = "Information on axe throwing leagues, rentals and events"
                image = {crossedAxeIcon}
                imageAlt = "Crossed Axes"
                link = "/axe-throwing"
            />,
            <ServiceCard
                title = "Escape Rooms"
                description = "Coming Soon!"
                image = {puzzleIcon}
                imageAlt = "Puzzle Icon."
                link = "/escape-room"
            />,
            <ServiceCard
                title = "More?"
                description = "Brave Art will be offering two new services in the near future. Follow us on social media or subscribe to our mailing list to be the first ot know!"
                image = {questionMarkIcon}
                imageAlt = "Question mark icon."
                link = "/news"
            />]
        }
    />
);

export default GeneralServicesSection;