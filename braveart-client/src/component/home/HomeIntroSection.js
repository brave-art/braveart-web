import React from 'react';
// import intro from "../../img/intro.png";
import intro from "../../img/braveart/adventure/cave_adventure.jpg";

const HomeIntroSection = () => (
    <section className="intro-section pt100 pb50">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 intro-text mb-5 mb-lg-0">
                    <h2 className="sp-title">We bring the <span>Adventure</span> to you</h2>
                    <p>
                        {"Experience the next generation in entertainment. Brave Art Adventures works to bring the " +
                        "latest forms of entertainment to you. We have an adventure for you whether you are looking " +
                        "plan an event or are a business looking to entertain your customers and employees." +
                        "Experience the adventure and book with Brave Art today!"}
                    </p>
                    <a href="/contact" className="site-btn sb-dark">Book Axe Throwing</a>
                </div>
                <div className="col-lg-5 pt-4">
                    <img src={intro} alt="intro pic"/>
                </div>
            </div>
        </div>
    </section>
);

export default HomeIntroSection;