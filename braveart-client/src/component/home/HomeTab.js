import React from 'react';

import HeroSection from "./HeroSection";
import HomeIntroSection from "./HomeIntroSection";
import CtaSection from "./CtaSection";
// import MilestonesSection from "./MilestonesSection";
// import ProjectsSection from "./ProjectsSection";
// import ClientsSection from "./ClientsSection";
import Footer from "../common/Footer";
import GeneralServicesSection from "../common/service/GeneralServicesSection";

const HomeTab = () => (

    <div className="HomeTab">

        <HeroSection/>
        <HomeIntroSection/>
        <GeneralServicesSection/>
        <CtaSection/>
        {/*<MilestonesSection/>*/}
        {/*<ProjectsSection/>*/}
        {/*<ClientsSection/>*/}
        <Footer/>

    </div>
);

export default HomeTab;