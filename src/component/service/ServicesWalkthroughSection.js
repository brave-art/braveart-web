import React from 'react';

import bgImage from '../../img/service-bg.jpg'

const ServicesWalkthroughSection = () => (
    <section className="service-box-section spad set-bg" style ={ { backgroundImage: "url("+bgImage+")" } }>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="solid-service-box">
                        <h2>01.</h2>
                        <h3>The idea</h3>
                        <p>Fusce commodo tincidunt convallis. <br/> Nunc at purus vitae nisl sagittis grav ida ut sit amet
                            diam.</p>
                        <a href="#" className="readmore">READ MORE</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="solid-service-box">
                        <h2>02.</h2>
                        <h3>Behind the work</h3>
                        <p>Fusce commodo tincidunt convallis. <br/> Nunc at purus vitae nisl sagittis grav ida ut sit amet
                            diam.</p>
                        <a href="#" className="readmore">READ MORE</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="solid-service-box">
                        <h2>03.</h2>
                        <h3>The Success</h3>
                        <p>Fusce commodo tincidunt convallis. <br/> Nunc at purus vitae nisl sagittis grav ida ut sit amet
                            diam.</p>
                        <a href="#" className="readmore">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ServicesWalkthroughSection;