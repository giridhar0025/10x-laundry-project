import React, {useState, useEffect} from 'react'
import './mainOrdersContainer.css'
import Navbar from '../navbar/navbar'

const MainOrdersContainer = () => {

  const token = localStorage.getItem('authorizationToken')

  const [orderHistory, setOrderHistory] = useState([])


  useEffect(() => {
       fetch('', {
        headers: {
          authorizationToken: token
        }
       }).then((res) => res.json()).then((data) => {
        setOrderHistory(data)
       })
  })

  console.log(orderHistory)


  return (
    <>
    <Navbar/>
    <div className="ordersContainer">
      <header className="ordersHeader">
        <div className="orders-count-div">
          <span>Orders | </span>
        </div>
        <div className="orders-search-div">
        <img className="search-icon" src="./Assets/search.svg" alt="search icon"></img>
            <input type="text" className="ordersSearch"></input>
        </div>
      </header>
      {
        
      }
      <div className="noOrders-div">
          <span className="noOrder-span">No Orders available</span>
          <button className="create-order-btn">Create</button>
      </div>
    </div>
    </>
  )
}

export default MainOrdersContainer