import React from 'react';

import Header from "../common/Header";
import ServicesSection from "../common/ServicesSection";
import Footer from "../common/Footer";
// import HeaderImage from "../../img/header-bg.jpg";
import HeaderImage from "../../img/braveart/axe/axe-in-field.jpg";
// import HeaderImage from "../../img/braveart/jen/jen.jpg";
// import HeaderImage from "../../img/braveart/axe/JenAxePic.JPG";
import ServicesIntroSection from "./ServiceIntroSection";
import ServicesWalkthroughSection from "./ServicesWalkthroughSection";
import PromoSection from "./PromoSection";

const AxeThrowingTab = () => (

    <div className="servicesTab">

        <Header
            screenTitle={["Axe",<br/>,"Throwing"]}
            bgImage={HeaderImage}
        />
        <ServicesIntroSection/>
        <ServicesSection/>
        <ServicesWalkthroughSection/>
        <PromoSection/>
        <Footer/>

    </div>
);

export default AxeThrowingTab;