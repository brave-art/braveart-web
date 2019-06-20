import React from 'react';

const Header = (props) => (
    <section class="page-header-section set-bg" style ={{ backgroundImage: "url("+props.bgImage+")" }}>
        <div class="container">
            <h1 class="header-title">{props.screenTitle}<span>{props.mark == null ? "." : props.mark}</span></h1>
        </div>
    </section>
)


export default Header;