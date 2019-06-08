import React from 'react'

const MilestonesSection = () => (
    <section className="milestones-section spad">
        <div className="container">
            <div className="row">
                <Milestone
                    key = "1"
                    quantity = "14"
                    description = {["Years", <br/>,"of", <br/>,"Experience"]}
                />
                <Milestone
                    key = "2"
                    quantity = "237"
                    description = {["Projects", <br/>,"Taken"]}
                />
                <Milestone
                    key = "3"
                    quantity = "11k"
                    description = {["Twitter", <br/>,"Followers"]}
                />
                <Milestone
                    key = "4"
                    quantity = "12"
                    description = {["Awards", <br/>,"Won"]}
                />
            </div>
        </div>
    </section>
);

const Milestone = (props) => (
    <div className="col-lg-3 col-md-6">
        <div className="milestone">
            <h2>{props.quantity}</h2>
            <p>{props.description}</p>
        </div>
    </div>
);

export default MilestonesSection;