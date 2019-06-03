import React from 'react';

import lightIcon1 from "../../img/icon/light/1.png";
import lightIcon2 from "../../img/icon/light/2.png";
import lightIcon3 from "../../img/icon/light/3.png";

const CtaSection = () => (
    <section className="cta-section pt100 pb50">
        <div className="cta-image-box"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
                    <h2 className="sp-title">Dare to dream of a modern <span>home</span></h2>
                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed
                        accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan
                        pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula.
                        Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                    <div className="cta-icons">
                        <div className="cta-img-icon">
                            <img src={lightIcon1} alt="icon for dare to dream"/>
                        </div>
                        <div className="cta-img-icon">
                            <img src={lightIcon2} alt="icon for dare to dream"/>
                        </div>
                        <div className="cta-img-icon">
                            <img src={lightIcon3} alt="icon for dare to dream"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CtaSection;