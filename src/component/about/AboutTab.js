import React from 'react';

import Header from "../common/Header";
import Footer from "../common/Footer";
import HeaderImage from "../../img/header-bg.jpg";
import AboutIntro from "./AboutIntroSection";
import TestimonialsSection from "./TestimonialsSection";
import TeamSection from "./TeamSection";

const AboutTab = () => (

    <div className="servicesTab">

        <Header
            screenTitle={"About us"}
            bgImage={HeaderImage}
        />
        <AboutIntro/>
        {/*<TestimonialsSection/>*/}
        <TeamSection/>
        {/*<ServicesSection/>*/}
        {/*<ServicesWalkthroughSection/>*/}
        {/*<PromoSection/>*/}
        <Footer/>

    </div>
);

export default AboutTab;