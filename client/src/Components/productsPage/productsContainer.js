import React, { useState, useEffect } from 'react'
import "./productContainer.css"
const ProductsContainer = () => {

    const [products, setProducts] = useState([])
    const [quantity,setQuantity]=useState(null)
    const [select,setSelect]=useState(false)

    useEffect(() => {
        fetch("http://localhost:3001/product", {

        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
            });
    }, []);
const handleQuantityInput=(e)=>{
    setQuantity(e.target.value)
}
const handleSelect=(e)=>{
    console.log(select)
    if (select===false) {
       
        setSelect(true)
    } else {
        console.log("entered in true")
        setSelect(false)
    }
   
}


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
                            </tr>
                        </thead>
                        {
                            products.map((item, key) => {
                                return (
                                        <tbody>
                                            <tr className="t-body-tr">
                                                <td style={{width: "350px"}} scope="row">
                                                <div className='product-detail'>
                                                <img className='product-image' src={item.productImage} alt="" />
                                                <div className="product-text">
                                                <span style={{fontSize: "14px"}}>{item.productName}</span>
                                                <span style={{fontSize: "10px"}}>{item.productDescription}</span>
                                                </div>
                                                </div></td>
                                                <td style={{width: "250px"}}><input className="quantity-input" type="text" onChange={handleQuantityInput}></input></td>
                                                <td style={{width: "450px"}}>
                                                    <div className='washType-icons'>
                                                    {
                                                       
                                                    }
                                                        
                                                        <img className="wash-icon" src="./Assets/ironing.svg" alt=""/>
                                                        <img className="wash-icon" src="./Assets/towel.svg" alt=""/>
                                                        <img className="wash-icon" src="./Assets/bleach.svg" alt=""/>
                                                    </div>
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        
                                        
                                        
                                  
                                )
                            })
                        }

                    </table>
                </div>

            </div>

        </>
    )
}

export default ProductsContainer
