import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import service1 from '../../img/braveart/517day/ScottThrowinganAxe517day.jpg';
// import service2 from '../../img/service/2.jpg';
// import service3 from '../../img/service/3.jpg';

const ServicesIntroSection = () => (
    <section className="intro-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <Carousel className="service-slider">
                        <Carousel.Item className="ss-single">
                            <img src={service1} alt="service image 1"/>
                        </Carousel.Item>
                        {/*<Carousel.Item className="ss-single">*/}
                        {/*    <img src={service2} alt="Service Image 2"/>*/}
                        {/*</Carousel.Item>*/}
                        {/*<Carousel.Item className="ss-single">*/}
                        {/*    <img src={service3} alt="Service Image 3"/>*/}
                        {/*</Carousel.Item>*/}
                    </Carousel>
                </div>
                <div className="col-lg-7 service-text">
                    <h1>We offer several different ways to enjoy <span>axe throwing</span></h1>
                    {/*<h2> Join a League</h2>*/}
                    {/*<p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed*/}
                    {/*    accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan*/}
                    {/*    pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. </p>*/}
                    <ol className={"servicesListingIntro"}>
                        <li><h2>Join a League</h2></li>
                        <li><h2>Rent Axe Throwing Lanes</h2></li>
                        <li><h2>Bring Axe Throwing to your organization</h2></li>
                        <li><h2>Visit Brave Art at local events and festivities</h2></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
);

export default ServicesIntroSection;