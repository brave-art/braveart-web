import React from 'react';

import Header from "../common/Header";
import ServicesSection from "../common/ServicesSection";
import Footer from "../common/Footer";
import HeaderImage from "../../img/header-bg.jpg";
import ServicesIntroSection from "./ServiceIntroSection";
import ServicesWalkthroughSection from "./ServicesWalkthroughSection";
import PromoSection from "./PromoSection";

const ServicesTab = () => (

    <div className="servicesTab">

        <Header
            screenTitle={"Services"}
            bgImage={HeaderImage}
        />
        <ServicesIntroSection/>
        <ServicesSection/>
        <ServicesWalkthroughSection/>
        <PromoSection/>
        <Footer/>

    </div>
);

export default ServicesTab;