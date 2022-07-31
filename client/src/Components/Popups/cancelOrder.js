import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './cancelOrder.css'

const CancelOrder = (props) => {


    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="modal-title-alert" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="modal-title-div">
                            <span className="modal-title-span span-text">Alert</span>
                            <Button onClick={props.onHide}><span class="material-symbols-outlined span-icon">close</span></Button>
                        </div>


                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-detail-box">
                        <div className="alert-caution">
                            <img alt="" src='./Assets/red-alert-icon.svg' />
                        </div>
                        <div className="alert-text-btn">
                            <span>Are you sure you want to cancel the order No: </span>
                            <br></br>
                            <button onClick={() => setModalShow(true)} className="cancel-proceed-btn">Proceed</button>
                            <CancelOrder show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CancelOrder