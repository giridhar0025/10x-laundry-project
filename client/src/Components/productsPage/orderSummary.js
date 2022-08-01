import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom'


const OrderSummary = (props) => {


  console.log(props)

  const Navigate = useNavigate()


  const token = localStorage.getItem("authorization");
  const OrderMainData = props.ordereddata;
  // console.log(OrderMainData)

  var RandomId = Math.floor(1000 + Math.random() * 9000);


  const StoreLocationData = {
       "storeLocation" : "Pune",
       "storeAddress" : "3471, Subzi Market, Hauz Quazi",
       "PhoneNumber" : 9876543212
    }
  
    let subtotalNumber = 0
    const SubTotalLogic = () => {
      OrderMainData.map((item) => {
         subtotalNumber = item.value.price + subtotalNumber
        
      })
      // console.log(subtotalNumber)
    }
    SubTotalLogic()

    const TotalPrice = subtotalNumber + 50

    // console.log(subtotalNumber)



//   const [OrderDataSend, setOrderDataSend] = useState({
//     userEmail: "",
//     orderId: "",
//     orderTime: "",
//     storeLocation: "",
//     storeAddress: "",
//     storePhoneNumber: "",
//     status: "",
//     orderDetails: [], 
//     subTotal: "",
//     pickupCharges: "",
//     TotalAmount: "",
//     userAddress: "",
// })

if (token === null) {
  localStorage.setItem("authorization", "")
} else if (token.length > 0) {
  
}


const OrderMainDetails = {
    
}

const handleCreateOrder = () => {
   fetch("http://localhost:3001/order/add", {
     method: "POST",
     body : JSON.stringify({
          userEmail: props.userdetails.email,
          orderId: RandomId,
          storeLocation: StoreLocationData.storeAddress,
          storeAddress: StoreLocationData.storeAddress,
          storePhoneNumber: StoreLocationData.PhoneNumber,
          status: "Ready to Pick up",
          orderDetails: OrderMainData, 
          subTotal: subtotalNumber,
          pickupCharges: 50,
          TotalAmount: TotalPrice,
          userAddress: props.userdetails.address,
     }),
     headers : {
      authorization: token,
      "Content-Type": "application/json"
     },
   }).then((res) => {
    console.log(res)

   }).catch((err) => {
    console.log(err)
   })
   Navigate('/orders')


}

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
                  <span>{StoreLocationData.storeAddress}</span>
                </div>
                <div className="modal-summary-internal-div">
                <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Address</span>
                  <span>{StoreLocationData.storeAddress}</span>
                </div>
                <div className="modal-summary-internal-div">
                <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Phone</span>
                  <span>{StoreLocationData.PhoneNumber}</span>
                </div>
            </div>
            
            <div className="order-summary-details">
              <span  style={{fontSize:"16px", fontWeight:"bold", marginTop: "30px" , marginLeft : "10px", display: "block"}}>
                Order Details :  {RandomId}
              </span>
              <div>
              <table className="order-view-table">
                  <tbody>
                  {OrderMainData.map((item)=>{
                        if(item.value.quantity>0){
                            return(
                            <>
                            <tr>
                          <th scope="row">{item.name}</th>
                          <td>{[
                            item.value.wash ? "Washing" : "",
                            item.value.iron ? "Ironing" : "",
                            item.value.towel ? "DryWash" : "",
                            item.value.bleach ? "Bleach" : "",
                          ]
                            .filter((x) => x.length > 0)
                            .join(",")}
                            </td>
                          <td>{item.value.price}</td>
                      </tr>
                      </>
                            )
                          }
                        }
                     )}
                  </tbody>
                  
              </table>
              <div className="order-view-charges-div">
              <div style={{fontWeight: 'bold', fontSize: '15px'}} className="order-view-subTotal">Sub Total: {subtotalNumber}</div>
              <div style={{fontWeight: 'bold', fontSize: '15px'}} className="order-view-pickupCharges">Pickup Charges: 50</div>
              <div  className="order-view-total"><span style={{marginRight : "120px"}}>Total: {TotalPrice}</span></div>
              </div>
               </div>
            </div>
           <div className="order-summary-address-con">
            <span style={{fontSize:"16px", fontWeight:"bold", marginLeft:"20px", marginTop:"10px", display: 'block'}}>Address</span>
            <div className="Address-div">
                <div>{props.userdetails.address}</div>
            </div>
           </div>
           <div className="order-summary-bottom-div">
             <button onClick={handleCreateOrder} className="create-order-btn">Create</button>
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