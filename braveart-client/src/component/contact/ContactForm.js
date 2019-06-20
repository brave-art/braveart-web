import React from 'react';
import AlertContactFormStatus from "../common/AlertContactFormStatus"

const ContactFormSection = () => (

<section className="page-section pt100">
    <div className="container pb100">
        <div className="contactSection section-title pt-5 row">
            <h1>Get in touch</h1>
            <p>Please contact us if you would like to book an axe throwing service or have any other inquiries.</p>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <ContactForm/>
            </div>

            <div className="col-lg-4 contact-info mb-5 mb-lg-0">
                <div className="row">
                    <label htmlFor="phoneNumber"><h4>Phone:&nbsp;&nbsp;</h4></label>
                    <a id="phoneNumber" href = "Tel:517-292-6061">517-292-6061</a>
                </div>
                <div className="row">
                    <label htmlFor="email"><h4>Email:&nbsp;&nbsp;</h4></label>
                    <a id="email" href = "mailto:customer.service@braveart.email?subject=Contact Brave Art&body=I would like more information about Brave Art services">customer.service@braveart.email</a>
                </div>
                {/*<div className="row">*/}
                {/*    <SocialLinks/>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>
    {/*<div className="map-area" id="map-canvas"></div>*/}
</section>

);

class ContactForm extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.alertContactFormStatus = React.createRef();

        this.state = {
            postingContactForm : false,
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const keyValueData = {};
        formData.forEach((value, key) => {keyValueData[key] = value});
        const jsonData = JSON.stringify(keyValueData);

        console.log('body: ' + jsonData);

        this.setState({ postingContactForm: true });

        // fetch('/api/contact-form', {
        fetch('https://api.braveart.world/contact', {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
            }
        }).then( () => {
                // this.alertContactFormStatus.current.handleShow("The request was processed Successfully!",
                //     "A Brave Art Adventures staff member will be in contact with you as soon as possible. " +
                //     "If your request requires immediate attention, please send an email to urgent@braveart.email");
        }).catch(error => {
                // console.log(error)
                // this.alertContactFormStatus.current.handleShow("The request did not process",
                //     "There was an error sending your request. Please try again or send your request directly to customer.service@braveart.email.");
        }).finally( () => {
            this.alertContactFormStatus.current.handleShow("The request was processed Successfully!",
                "A Brave Art Adventures staff member will be in contact with you as soon as possible. " +
                "If your request requires immediate attention, please send an email to urgent@braveart.email");

                this.setState({ postingContactForm: false });
        });
    }

    render() {

        const {postingContactForm} = this.state;

        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <label htmlFor="contactName">Name</label>
                <input id="contactName" name="contactName" type="text" placeholder="Enter your name"/>

                <label htmlFor="contactEmail">Email</label>
                <input id="contactEmail" name="contactEmail" type="email" placeholder="example@mail.com" required />

                <label htmlFor="contactMessage">Message</label>
                <textarea  id="contactMessage" name="contactMessage" placeholder="Enter your Message ..." required />

                <button className="site-btn sb-dark" disabled={postingContactForm}>
                    {postingContactForm && <i className={"fa fa-refresh fa-spin"}/>}
                    {postingContactForm && <span>Sending Request...</span>}
                    {!postingContactForm && <span>Send</span>}
                </button>
                <AlertContactFormStatus ref={this.alertContactFormStatus}/>
            </form>
        );
    }
}

export default ContactFormSection;