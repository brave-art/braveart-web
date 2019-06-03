import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const TestimonialsSection = () => (

    <section className="testimonials-section spad">
        <div className="testimonials-image-box"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
                    <h1>Clients <span>testimonials</span></h1>
                    <div className="qut">“</div>
                    <Carousel className="testimonials-slider" id="test-slider">
                        <Carousel.Item>
                            <Testimonial
                                testimony={"ellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque\n" +
                                "                                sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada,\n" +
                                "                                accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis\n" +
                                "                                ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. "}
                                testifier={"Maria Westminster"}
                                relationship={"Client"}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Testimonial
                                testimony={"This is a great testimony"}
                                testifier={"Maria Westminster"}
                                relationship={"Client"}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Testimonial
                                testimony={"This is a great testimony"}
                                testifier={"Maria Westminster"}
                                relationship={"Client"}
                            />
                        </Carousel.Item>
                    </Carousel>
                    {/*<div className="slide-num-holder test-slider" id="snh-2"/>*/}
                </div>
            </div>
        </div>
    </section>
);

const Testimonial = (props) => (
    <div className="ts-item">
        <p>{props.testimony}</p>
        <h4>{props.testifier}</h4>
        <span>{props.relationship}</span>
    </div>
);

export default TestimonialsSection;