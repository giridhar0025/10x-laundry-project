import React, { useState, useEffect } from "react";
import "./mainOrdersContainer.css";

const MainOrdersContainer = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.c2h1YmFtQGdtYWlsLmNvbQ.OHHfzEaWFGjJkNWUeLYjVth0LPACBGz83V9ZybAoYDU";

  const [orderHistory, setOrderHistory] = useState([]);

  const [filteredSearch, setFilteredSearch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/order", {
      headers: {
        authorizationToken: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(...data.orders)
        setOrderHistory(data.orders);
      });
  }, []);


  const handleFilter = (e) => {
    const searchWord = e.target.value
    console.log(e.target.value)
    const newFilter = orderHistory.filter((value) => {
      return value.orderId.includes(searchWord)
    })
    console.log(searchWord.length < 0)
    if (searchWord.length === 0) {
      setFilteredSearch([])
    } else{
      setFilteredSearch(newFilter)
    }
 
  }

  console.log(filteredSearch.length);

  return (
    <>
      <div className="ordersContainer">
        <header className="ordersHeader">
          <div className="orders-count-div">
            <span>Orders | </span>
          </div>
          <div className="orders-search-div">
              <div className="orders-search-main-div">
              <img
                className="search-icon"
                src="./Assets/search.svg"
                alt="search icon"
              ></img>
              <input onChange={handleFilter} type="text" className="ordersSearch"></input>
            </div>
            {filteredSearch.length !== 0 && (
                   <div className="search-results-div">
                   {
                    filteredSearch.map((item, key) => {
                      return (
                        <a href="/" className="search-result-a">{item.orderId}</a>
                      )
                    })
                   }
                </div>
            )}
            
          </div>
        </header>
        {orderHistory.length ? (
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Order Date & Time</th>
                <th scope="col">Store Location</th>
                <th scope="col">City</th>
                <th scope="col">Store Phone</th>
                <th scope="col">Total Items</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                <th scope="col">View</th>
              </tr>
            </thead>
            {orderHistory.map((item, key) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{item.orderId}</th>
                    <td>{item.orderTime}</td>
                    <td>{item.storeLocation}</td>
                    <td>{item.storeAddress}</td>
                    <td>{item.storePhoneNumber}</td>
                    <td>{item.orderDetails.length}</td>
                    <td>{item.TotalAmount}</td>
                    <td>{item.status}</td>
                    <td>
                      <button class="order-history-cancel">Cancel Order</button>
                    </td>
                    <td>icon</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <div className="noOrders-div">
            <span className="noOrder-span">No Orders available</span>
            <button className="create-order-btn">Create</button>
          </div>
        )}
      </div>
    </>
  );
};

export default MainOrdersContainer;
