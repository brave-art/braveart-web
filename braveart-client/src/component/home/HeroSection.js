import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import SocialLinks from '../common/SocialLinks';

import caveSpotlightImg from "../../img/braveart/adventure/cave_spotlight_adventure2.jpg";
// import bg2 from "../../img/bg.jpg";

const HeroSection = () => (
    <section className="hero-section">
        <div className="left-bar">
            <div className="left-bar-content">
                <SocialLinks/>
            </div>
        </div>
        <Carousel className="hero-slider">
            <Carousel.Item>
                <HeroSlideItem
                    bgImage={caveSpotlightImg}
                    title={["Experience.",<br/>,"Unique.",<br/>,"Entertainment."]}
                    buttonLink={"/contact"}
                    buttonLinkText={"Book Now"}
                />
            </Carousel.Item>
            {/*<Carousel.Item>*/}
            {/*    <HeroSlideItem*/}
            {/*        bgImage={bg2}*/}
            {/*        title={["Minimalistic",<br/>,"Architecture",<br/>,"and more"]}*/}
            {/*        buttonLink={"#"}*/}
            {/*        buttonLinkText={"See Project"}*/}
            {/*    />*/}
            {/*</Carousel.Item>*/}
            {/*<Carousel.Item className="hero-slide-item set-bg"  style ={ { backgroundImage: "url("+bg+")" } }>*/}
            {/*    <div  className="slide-inner">*/}
            {/*        <div className="slide-content">*/}
            {/*            <h2>Minimalistic <br/>Architecture <br/> and more</h2>*/}
            {/*            <a href="#" className="site-btn sb-light">See Project</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Carousel.Item>*/}

        </Carousel>
        {/*<div className="slide-num-holder" id="snh-1"/>*/}
        <div className="hero-right-text">Adventure</div>
    </section>
);
//style ={ { backgroundImage: "url("+props.bgImage+")" }}
const HeroSlideItem = (props) => (
    <div className="hero-slide-item set-bg"  style ={ { backgroundImage: "url("+props.bgImage+")" }}>
        {/*<img className="hero-slide-item set-bg" src={props.bgImage} alt={"cave spotlight"}*/}
        {/*    style={{display: "inline-block"}}/>*/}
        <div className="slide-inner">
            <div className="slide-content">
                <h2>{props.title}</h2>
                <a href={props.buttonLink} className="site-btn sb-light">{props.buttonLinkText}</a>
            </div>
        </div>
    </div>
);

export default HeroSection;