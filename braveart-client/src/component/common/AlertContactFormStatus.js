import React from 'react';
import Modal from 'react-bootstrap/Modal'

export const myConst = "";

class AlertContactFormStatus extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            title: "",
            msg: "",
        };

        this.handleShow = (alertTitle,alertMsg) => {
            this.setState({ title: alertTitle });
            this.setState({ msg: alertMsg });
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }

    render() {
        return (
            <Modal
                show={this.state.show}
                onHide={this.handleHide}
                dialogClassName="modal-90w"
                aria-labelledby={"example-custom-modal-styling-title"}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {this.state.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.state.msg}</p>
                </Modal.Body>
            </Modal>
        );
    }
}

export default AlertContactFormStatus;

