import React from 'react'
import Navbar from '../navbar/navbar'
import MainOrdersContainer from './mainOrdersContainer'
import Sidebar from '../sidebar/sidebar'
import SmallFooter from '../Footer/smallFooter'
import './orders.css'

const Orders = () => {
  return (
    <>
    <Navbar/>
    <div className="center-container">
       <Sidebar/>
       <MainOrdersContainer/>
    </div>
    <SmallFooter/>
    </>
  )
}

export default Orders