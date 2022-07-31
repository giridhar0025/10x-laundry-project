import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './summaryStyles.css'
import styled from 'styled-components'


const Summary = (props) => {
    const [modalShow, setModalShow] = useState(false);


  return (


    <>

    <Modal
      {...props}
      // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="example-custom-modal-styling-title"
        className="custom-modal"
    >
      <div className="modal-container">
      <Modal.Header  className="modal-title-summary" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <div className="modal-title-div">
            <span className="modal-summary-span span-text">Summary</span>
            <Button onClick={props.onHide}><span class="material-symbols-outlined summary-span-icon">close</span></Button>
            </div>
          
          
        </Modal.Title>
      </Modal.Header>
      <div className="summary-container">
      <Modal.Body>
          <div>
            <div className="modal-summary-location">

            </div>
            <div className="order-summary-status">
                
            </div>
            <div className="order-summary-details">
              <span>
                Order Details
              </span>
              <div>
                
              </div>
            </div>
           <div className="order-summary-address-con">
            <span>Address</span>
            <div className="Address-div">

            </div>
           </div>
           <div className="order-summary-bottom-div">
             
           </div>
          </div>

          
      </Modal.Body>
      </div>
      </div>
    </Modal>

  
      
    </>
  )
}

export default Summary


const modalDialog = styled.div`
width: 926px;
margin: 0;
background-color: white;
height: 930px;
margin-left: 514px;
`