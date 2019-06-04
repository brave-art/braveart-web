import React from 'react';
import SocialLinks from "./SocialLinks";

const Header = (props) => (
    <section class="page-header-section set-bg" style ={{ backgroundImage: "url("+props.bgImage+")" }}>
        {/*<div className="left-bar">*/}
        {/*    <div className="left-bar-content">*/}
        {/*        <SocialLinks/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div class="container">
            <h1 class="header-title">{props.screenTitle}<span>.</span></h1>
        </div>
    </section>
)


export default Header;