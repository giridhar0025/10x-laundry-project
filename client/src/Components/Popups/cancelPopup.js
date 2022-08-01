import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './cancelPopUp.css'
import CancelOrder from './cancelOrder'

const CancelPopup = (props) => {


  let orderData = props.cancelOrderData

  // console.log(orderData)

  const [maincanceldata, setMainCancelData] = useState([]);


    const [modalShow, setModalShow] = useState(false);

    const handleOrderCancelSend = (orderData) => {
      setMainCancelData(orderData)
      //  console.log(orderData)
    }



  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="modal-title-alert" closeButton>
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
                <img  alt=""  src='./Assets/red-alert-icon.svg'/>
            </div>
            <div className="alert-text-btn">
            <span>Are you sure you want to cancel the order No: {orderData.orderId}</span>
            <br></br>
            <button onClick={() => setModalShow(true)}  className="cancel-proceed-btn"><div onClick={() => handleOrderCancelSend(orderData)}>Proceed</div></button>
            <CancelOrder show={modalShow} maincanceldata={maincanceldata} onHide={() => setModalShow(false)} />
            </div>
        </div>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default CancelPopup