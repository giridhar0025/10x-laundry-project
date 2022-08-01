import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const OrderSummary = (props) => {
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
                <div className="modal-summary-internal-div">
                  <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Location</span>
                  <span>{}</span>
                </div>
                <div className="modal-summary-internal-div">
                <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Address</span>
                  <span>{}</span>
                </div>
                <div className="modal-summary-internal-div">
                <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Phone</span>
                  <span>{}</span>
                </div>
            </div>
            
            <div className="order-summary-details">
              <span  style={{fontSize:"16px", fontWeight:"bold", marginTop: "30px" , marginLeft : "10px", display: "block"}}>
                Order Details :  {}
              </span>
              <div>
              <table className="order-view-table">
                  <tbody>
                      <tr style={{borderBottom: "1px solid #e9e9e9"}}>
                          <th scope="row">Shirts</th>
                          <td>Washing, ironing</td>
                          <td>5 x 20 = 100</td>
                      </tr>
                      <tr style={{borderBottom: "1px solid #e9e9e9"}}>
                      <th scope="row">Jeans</th>
                          <td>Washing, ironing</td>
                          <td>5 x 30 = 150</td>
                      </tr>
                      <tr style={{borderBottom: "1px solid #e9e9e9"}}>
                      <th scope="row">Joggers</th>
                          <td>Chemical Wash</td>
                          <td>1 x 100 = 200</td>
                      </tr>
                  </tbody>
                  
              </table>
              <div className="order-view-charges-div">
              <div style={{fontWeight: 'bold', fontSize: '15px'}} className="order-view-subTotal">Sub Total: {}</div>
              <div style={{fontWeight: 'bold', fontSize: '15px'}} className="order-view-pickupCharges">Pickup Charges: {}</div>
              <div  className="order-view-total"><span style={{marginRight : "120px"}}>Total: {}</span></div>
              </div>
               </div>
            </div>
           <div className="order-summary-address-con">
            <span style={{fontSize:"16px", fontWeight:"bold", marginLeft:"20px", marginTop:"10px", display: 'block'}}>Address</span>
            <div className="Address-div">
                <div>{}</div>
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

export default OrderSummary