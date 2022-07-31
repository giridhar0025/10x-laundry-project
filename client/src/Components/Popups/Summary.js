import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './summaryStyles.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Summary = (props) => {



   let orderData = props.orderData
  

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
                <div>
                  <span style={{fontSize:"16px"}}>Store Location</span>
                  <span>{orderData.storeLocation}</span>
                </div>
                <div>
                <span style={{fontSize:"16px"}}>Store Address</span>
                  <span>{orderData.storeAddress}</span>
                </div>
                <div>
                <span style={{fontSize:"16px"}}>Store Phone</span>
                  <span>{orderData.storePhoneNumber}</span>
                </div>
            </div>
            <div className="order-summary-status">
            <ProgressBar animated now={45} />
            <span>{orderData.orderTime}</span>
            </div>
            <div className="order-summary-details">
              <span>
                Order Details :  {orderData.orderId}
              </span>
              <div>
              <table>
                  <tbody>
                      <tr>
                          <th scope="row">Shirts</th>
                          <td>Washing, ironing</td>
                          <td>5 x 20 = 100</td>
                      </tr>
                      <tr>
                      <th scope="row">Jeans</th>
                          <td>Washing, ironing</td>
                          <td>5 x 30 = 150</td>
                      </tr>
                      <tr>
                      <th scope="row">Joggers</th>
                          <td>Chemical Wash</td>
                          <td>1 x 100 = 200</td>
                      </tr>
                  </tbody>
                  <div>Sub Total: {orderData.subTotal}</div>
                  <div>Pickup Charges: {orderData.pickupCharges}</div>
                  <div>Total: {orderData.TotalAmount}</div>
              </table>
              </div>
            </div>
           <div className="order-summary-address-con">
            <span>Address</span>
            <div className="Address-div">
                <div>{orderData.userAddress}</div>
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

