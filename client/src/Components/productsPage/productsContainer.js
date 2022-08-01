import React, { useState, useEffect } from 'react'
import "./productContainer.css"
import ProductComponent from './product-component'
const ProductsContainer = () => {

    const [products, setProducts] = useState([])
let pricesArray=[]
    useEffect(() => {
        fetch("http://localhost:3001/product", {

        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
            });
    }, []);
const handlePricesArr=()=>{
    products.map((item)=>{
        pricesArray.push(item.washType)
        return{}
    })
    

}
handlePricesArr()
const order = { orderId: "orderId", userId: "userId", details: new Map() };
let orderedDate = [];

const handleDataSend = (props) => {
    order.details.set(props.name, props.value);
    orderedDate = [...order.details].map(([name, value]) => ({
      name,
      value,
    }));
    console.log("orderedData", orderedDate);
    return;
}
const handleDataSendProceed=()=>{
console.log(orderedDate)
}
// console.log("orderedData", orderedDate);



    return (
        <>
            <div className='products-container-main'>
                <header className="ordersHeader">
                    <div className="orders-count-div">
                        <span>Orders |</span>
                    </div>

                    <div style={{ marginLeft: "870px" }} className="orders-search-div">
                        <div className="orders-search-main-div">
                            <img
                                className="search-icon"
                                src="./Assets/search.svg"
                                alt="search icon"
                            ></img>
                            <input type="text" className="ordersSearch"></input>
                        </div>
                    </div>
                </header>
                <div className='product-listing'>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Product Types</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Wash Type</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        {
                            products.map((item, key) => {

                                return (
                                    <>
                                        <ProductComponent  description={item.productDescription} image={item.productImage} name={item.productName} washPrize={pricesArray} handleclick={handleDataSend}/> 
                                    </>
                                )
                            })
                        }

                    </table>
                    <div className="product-btns">
                    <button className='cancel-product'>Cancel</button>
                        <button onClick={handleDataSendProceed} className='proceed-product'>Proceed</button>
                    </div>
                </div>


            </div>

        </>
    )
}

export default ProductsContainer
