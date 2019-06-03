import React from 'react';

import team1 from '../../img/team/1.jpg'
import team2 from '../../img/team/2.jpg'
import team3 from '../../img/team/3.jpg'

const TeamMember = (props) => (
    <div className="col-lg-4 col-md-6">
        <div className="team-member">
            <img src={props.image} alt="Team photo"/>
            <div className="member-info">
                <h2>{props.name}</h2>
                <p>{props.role}t</p>
            </div>
        </div>
    </div>
);

const TeamSection = () => (
<section class="team-section spad">
        <div class="container">
            <div class="section-title mb100">
                <h1>The Team</h1>
            </div>
            <div class="row">
                <TeamMember
                    image={team1}
                    name={"Jack Smith"}
                    role={"Senior Architect"}
                />
                <TeamMember
                    image={team2}
                    name={"Lili Jameson"}
                    role={"Senior Architect"}
                />
                <TeamMember
                    image={team3}
                    name={"Michael Dow"}
                    role={"Senior Architect"}
                />
            </div>
        </div>
    </section>
);



export default TeamSection;