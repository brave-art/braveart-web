import React from 'react';

import HeroSection from "./HeroSection";
import HomeIntroSection from "./HomeIntroSection";
import ServicesSection from "../common/ServicesSection";
import CtaSection from "./CtaSection";
import MilestonesSection from "./MilestonesSection";
import ProjectsSection from "./ProjectsSection";
import ClientsSection from "./ClientsSection";
import Footer from "../common/Footer";

const HomeTab = () => (

    <div className="HomeTab">

        <HeroSection/>
        <HomeIntroSection/>
        <ServicesSection/>
        <CtaSection/>
        {/*<MilestonesSection/>*/}
        {/*<ProjectsSection/>*/}
        {/*<ClientsSection/>*/}
        <Footer/>

    </div>
);

export default HomeTab;