import React from 'react';

import bgImage from "../../img/bg.jpg";

const PromoSection = () => (

<section className="promo-section pt-0">
    <div className="promo-box set-bg" style ={ { backgroundImage: "url("+bgImage+")" } }>
        <div className="container">
            <div className="row">
                <div className="col-lg-9 promo-text">
                    <h1>Have questions or need more information? </h1>
                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed
                        accumsan risus.</p>
                </div>
                <div className="col-lg-3 text-lg-right">
                    <a href="#/contact" className="site-btn sb-light mt-4">Get in Touch</a>
                </div>
            </div>
        </div>
    </div>
</section>

);

export default PromoSection;