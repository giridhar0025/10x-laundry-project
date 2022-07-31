import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Summary = (props) => {
    const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-container"
    >
      <Modal.Header  className="modal-title-summary" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <div className="modal-title-div">
            <span className="modal-title-span span-text">Summary</span>
            <Button onClick={props.onHide}><span class="material-symbols-outlined span-icon">close</span></Button>
            </div>
          
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-detail-box">
            <div className="alert-caution">
                <img src='./Assets/red-alert-icon.svg'/>
            </div>
            <div className="alert-text-btn">
            <span>Are you sure you want to cancel the order No: </span>
            <br></br>
            <button className="cancel-proceed-btn">Proceed</button>
           
            </div>
        </div>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default Summary