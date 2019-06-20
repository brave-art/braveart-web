import React from 'react';

import Header from "../common/Header";
import Footer from "../common/Footer";
import HeaderImage from "../../img/braveart/escape-room/cave-explorer-shrunk.jpg";

const EscapeRoomComingSoon = () => (

    <div className="escapeRoomComingSoon">

        <Header
            screenTitle={["Escape Rooms...",<br/>,"Coming Soon!"]}
            bgImage={HeaderImage}
            mark={"!"}
        />
        <Footer/>

    </div>
);

export default EscapeRoomComingSoon;
