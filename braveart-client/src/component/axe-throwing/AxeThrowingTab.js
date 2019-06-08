import React from 'react';

import Header from "../common/Header";
import AxeThrowingServicesSection from "./AxeThrowingServicesSection";
import Footer from "../common/Footer";
// import HeaderImage from "../../img/header-bg.jpg";
import HeaderImage from "../../img/braveart/axe/axe-in-field.jpg";
// import HeaderImage from "../../img/braveart/jen/jen.jpg";
// import HeaderImage from "../../img/braveart/axe/JenAxePic.JPG";



import ServicesIntroSection from "./ServiceIntroSection";
import ServicesWalkthroughSection from "./ServicesWalkthroughSection";
import PromoSection from "../common/PromoSection";

const AxeThrowingTab = () => (

    <div className="servicesTab">

        <Header
            screenTitle={["Axe",<br/>,"Throwing"]}
            bgImage={HeaderImage}
        />
        <ServicesIntroSection/>
        <AxeThrowingServicesSection/>
        {/*<ServicesWalkthroughSection/>*/}
        <PromoSection
                msgTitle={"Have questions or want to schedule an event?"}
                msg={"Contact us and we will be happy to assist!"}
                link={"#/contact"}
        />
        <Footer/>

    </div>
);

export default AxeThrowingTab;