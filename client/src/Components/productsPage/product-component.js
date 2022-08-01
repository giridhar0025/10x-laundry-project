import React from 'react'
import { useState,useEffect } from "react"
import towel1 from "./towel-blue.png"
import towels from "./towel.svg"
import iron1 from "./ironing-blue.svg"
import irons from "./ironing.svg"
import washingMachine1 from "./washing-machine-blue.svg"
import washingMachine from "./washing-machine.svg"
import bleach1 from "./bleach -blue.svg"
import bleachs from "./bleach.svg"

const ProductComponent = (props) => {

    const [wash, setWash] = useState(false)
    const [bleach, setBleach] = useState(false)
    const [towel, setTowel] = useState(false)
    const [iron, setIron] = useState(false)
    const [quantity,setQuantity]=useState(null)
    const [prize,setPrize]=useState('-')
    const arr=props.washPrize

    // const [washprice,setwashprice]=useState(0)
    

    const handleReset=()=>{
        
        setIron(false)
        setBleach(false)
        setTowel(false)
        setPrize('-')
        setWash(false)
        setQuantity('')
    }
    
    const prizeCalculation=()=>{
        let cost=0
        
        
        if(wash){
            // console.log(quantity)
            console.log("Entered in wash")
            // console.log(arr[0][0])
            
            cost+=(parseInt(quantity)*parseInt(arr[0][0]))
           
        }
      
        if(iron){
            console.log("Entered in iron")
            cost+=(quantity*parseInt(arr[0][1]))
            
        }
        if(towel){
            // console.log(arr[0][3])
            console.log("Entered in towel")
            cost+=(quantity*parseInt(arr[0][2]))
          
        }
        if(bleach){
            //  console.log(arr[0][3])
            console.log("Entered in bleach")
            cost+=(parseInt(quantity)*parseInt(arr[0][3]))
           
        }
       
        setPrize(cost)
        console.log(cost)
    }
    useEffect(()=>{
          prizeCalculation()
          props.handleclick({
            name:props.name,
            value:{
                quantity:quantity,
                wash:wash,
                iron:iron,
                towel:towel,
                bleach:bleach
            },
            quantity:quantity,
            price:prize
          })
    })
    const handleWash = () => {
        setWash(!wash)
        
        // prizeCalculation()
    }
    const handleBleach = () => {
        setBleach(!bleach)
        // prizeCalculation()  
        
    }
    const handleTowel = () => {
        setTowel(!towel)
        // prizeCalculation()
        
    }
    const handleIron = () => {
        setIron(!iron)
        // prizeCalculation()
        
    }

    const handleQuantity=(value)=>{
        console.log(quantity)
        setQuantity(value)
        
        // prizeCalculation()
        
    }

    return (
        <>
            <tbody>
                <tr className="t-body-tr">
                    <td style={{ width: "350px" }} scope="row">
                        <div className='product-detail'>
                            <img className='product-image'  src={props.image} alt="" />
                            <div className="product-text">
                                <span style={{ fontSize: "14px" }}>{props.name}</span>
                                <span style={{ fontSize: "10px" }}>{props.description}</span>
                            </div>
                        </div></td>
                        <td>
                            <input type="text" name="quantity"  className='quantity-input' value={quantity} onChange={(e)=>handleQuantity(e.target.value)}></input>
                        </td>
                        <td style={{width: "450px"}}>
                                                    <div className='washType-icons'>
                                                    
                                                     <img onClick={handleWash}  type="Boolean" name="wash" className="wash-icon" src={wash ?  washingMachine1 : washingMachine} alt=""/>  
                                                        <img className="wash-icon" type="Boolean" name="iron" onClick={handleIron} src={iron ? iron1 :irons} alt=""/>
                                                        <img className="wash-icon" onClick={handleTowel} name="towel" type="Boolean" src={towel ? towel1 : towels} alt=""/>
                                                        <img className="wash-icon" onClick={handleBleach} name="bleach" type="Boolean" src={bleach ? bleach1 : bleachs} alt=""/>
                                                    </div>
                                                </td>
                    <td className='Price-product'>
                        <p className='product-price-p'>{quantity} X {washprice} = {prize}</p>
                    </td>
                    <td>
                        <button className='product-reset' onClick={handleReset}>Reset</button>
                    </td>
                </tr>
                
            </tbody>
        </>
    )
}

export default ProductComponent
