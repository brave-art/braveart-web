import React from 'react';

import Header from "../common/Header";
import HeaderImage from "../../img/header-bg.jpg";
import ContactFormSection from "./ContactForm";

const ContactTab = () => (

    <div className="servicesTab">

        <Header
            screenTitle={"Contact"}
            bgImage={HeaderImage}
        />
        <ContactFormSection/>
    </div>
);

export default ContactTab;