import React from 'react';

import classnames from 'classnames';

import project1 from "../../img/projects/1.jpg";
import project2 from "../../img/projects/2.jpg";
import project3 from "../../img/projects/3.jpg";
import project4 from "../../img/projects/4.jpg";

const ProjectsSection = () => (
    <div className="projects-section pb50">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="section-title">
                        <h1>Projects</h1>
                    </div>
                </div>
                <div className="col-lg-9">
                    <ul className="projects-filter-nav">
                        <li className="btn-filter" data-filter="*">All</li>
                        <li className="btn-filter" data-filter=".rest">Restaurations</li>
                        <li className="btn-filter" data-filter=".build">Buildings</li>
                        <li className="btn-filter" data-filter=".apart">Apartments</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="projects-carousel" className="projects-slider">
            <Project
                filterClass={"rest"}
                backgroundImage={project1}
                title={["Biggest",<br/>,"Restaurations"]}
                date={"Jan 19, 2018"}
                link={"#"}
            />
            <Project
                filterClass={"build"}
                backgroundImage={project2}
                title={["Office",<br/>,"Building"]}
                date={"Jan 19, 2018"}
                link={"#"}
            />
            <Project
                filterClass={"apart"}
                backgroundImage={project3}
                title={["Nice",<br/>,"Apartments"]}
                date={"Jan 19, 2018"}
                link={"#"}
            />
            <Project
                filterClass={"rest"}
                backgroundImage={project4}
                title={["Biggest",<br/>,"Restaurations2"]}
                date={"Jan 19, 2018"}
                link={"#"}
            />
        </div>
    </div>
);


const Project = (props) => (
    <div className={classnames("single-project","set-bg",props.filterClass)}
         style ={ {backgroundImage: "url("+props.backgroundImage+")", backgroundRepeat: "no-repeat" }}
    >
        {/*// <div className="single-project set-bg ${props.filterClass}"*/}
        <div className="project-content">
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <a href={props.link} className="seemore">See Project </a>
        </div>
    </div>
);

export default ProjectsSection;