import React from 'react';

// import bgImage from "../../img/bg.jpg";
import promoImage from "../../img/braveart/adventure/lightbulb.jpg";

const PromoSection = (props) => (

<section className="promo-section pt-0">
    <div className="promo-box set-bg"
         style ={ { backgroundImage: "url("+(props.bgImage==null?promoImage:props.bgImage)+")" } }>
        <div className="container">
            <div className="row">
                <div className="col-lg-9 promo-text">
                    <h1>{props.msgTitle}</h1>
                    <p>{props.msg}</p>
                </div>
                <div className="col-lg-3 text-lg-right">
                    <a href={props.link} className="site-btn sb-light mt-4">Get in Touch</a>
                </div>
            </div>
        </div>
    </div>
</section>

);

export default PromoSection;