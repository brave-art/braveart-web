import React from 'react';
import AbstractServicesSection from "../common/service/AbstractServicesSection";
import ServiceCard from "../common/service/ServiceCard";
import leagueIcon from "../../img/braveart/crossedLumberjackAxes/crossed-lumberjack-axes-icon-cut.png";
// import puzzleIcon from "../../img/braveart/puzzle Icon/puzzle-icon.svg";
// import questionMarkIcon from "../../img/braveart/puzzle Icon/question-mark-icon.svg";
import partnerIcon from "../../img/braveart/handshake-icon/handshake2-icon.svg";
import rentalIcon from "../../img/braveart/mobile-icon/truck-icon.svg";
import eventIcon from "../../img/braveart/event-icon/calendar-icon.svg";


const AxeThrowingServicesSection =  () =>(

    <AbstractServicesSection
        title={"Axe Throwing Services"}
        serviceCards={[
            <ServiceCard
                title = {"Join an Axe Throwing League"}
                description = {"Want to join a recreation or official Axe Throwing League? " +
                "We are members of the World Axe Throwing League and run leagues year round."}
                image = {leagueIcon}
                imageAlt = "League icon."
                link = "/contact"
            />,
            <ServiceCard
                title = "Partner with Brave Art"
                description ={"Do you want to bring Axe Throwing to your business? " +
                "Axe Throwing is a great way to attract more customers. "}
                image = {partnerIcon}
                imageAlt = "Partner icon."
                link = "/contact"
            />,
            <ServiceCard
                title = "Rent Axe Throwing Lanes"
                description = "Axe Throwing Lanes are available for both personal and business events."
                image = {rentalIcon}
                imageAlt = "Rent Lanes icon."
                link = "/contact"
            />,
            <ServiceCard
                title = "Visit us at local events and festivals"
                description = {"See our public events calendar and come visit us! You can also subscribe to " +
                "know where we will be next."}
                image = {eventIcon}
                imageAlt = "Events icon."
                link = "/contact"
            />]
        }
    />
);

export default AxeThrowingServicesSection;