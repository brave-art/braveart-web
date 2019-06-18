import React from 'react';


import jenPic from '../../img/braveart/jen/JenVertical.jpg'
import scottPic from '../../img/braveart/scott/scott-3.jpg'

const TeamMember = (props) => (
    <div className="col-lg-5 col-md-6">
        <div className="team-member">
            <img src={props.image} alt="Team photo"/>
            <div className="member-info">
                <h3 margin-bottom="5px">{props.name}</h3>
                <p>{props.role}</p>
            </div>
        </div>
    </div>
);

const TeamSection = () => (
<section class="team-section spad">
        <div class="container">
            <div class="section-title mb100">
                <h1>Meet The Owners</h1>
            </div>
            <div class="row">
                <TeamMember
                    image={jenPic}
                    name={"Jennifer Latunski"}
                    role={"Owner"}
                />
                <TeamMember
                    image={scottPic}
                    name={"Scott Latunski"}
                    role={"Owner"}
                />
            </div>
        </div>
    </section>
);



export default TeamSection;