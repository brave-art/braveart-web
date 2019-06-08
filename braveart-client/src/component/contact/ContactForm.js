import React from 'react';
import SocialLinks from "../common/SocialLinks";

const ContactFormSection = () => (

<section className="page-section pt100">
    <div className="container pb100">
        <div className="section-title pt-5 ">
            <h1>Get in touch</h1>
        </div>
        <div className="row">
            <div className="col-lg-3 contact-info mb-5 mb-lg-0">
                <div className="row">
                    <label htmlFor="phoneNumber">Phone:</label>
                    <a id="phoneNumber" href = "Tel:517-292-6061">517-292-6061</a>
                </div>
                <div className="row">
                    <label htmlFor="email">Email:</label>
                    <a id="email" href = "mailto:info@braveart.email?subject=Contact Brave Art&body=I would like more information about Brave Art services">info@braveart.email</a>
                </div>
                <div className="row">
                    <SocialLinks/>
                </div>

            </div>
            <div className="col-lg-9">
                <ContactForm/>
            </div>
        </div>
    </div>
    {/*<div className="map-area" id="map-canvas"></div>*/}
</section>

);

class ContactForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const keyValueData = {};
        formData.forEach((value, key) => {keyValueData[key] = value});
        const jsonData = JSON.stringify(keyValueData);

        console.log('body: ' + jsonData);

        fetch('/api/contact-form', {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json',
            }
        }).catch(error => console.log(error));
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <label htmlFor="contactName">Name</label>
                <input id="contactName" name="contactName" type="text" placeholder="Enter your name"/>

                <label htmlFor="contactEmail">Email</label>
                <input id="contactEmail" name="contactEmail" type="email" placeholder="example@mail.com" required />

                <label htmlFor="contactMessage">Message</label>
                <textarea  id="contactMessage" name="contactMessage" placeholder="Enter your Message ..." required />

                <button className="site-btn sb-dark">Send</button>
            </form>
        );
    }
}

export default ContactFormSection;