import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState} from 'react'
// import Protected from './components/protectedRoutes/protected'


import Products from './Components/productsPage/products';

import Orders from './Components/ordersPage/orders'
import Signin from './Components/signIn/Signin'
import SignUp from './Components/register/SignUp';



function App() {

  const [mainData, setMainData] = useState([])

  const token =
  localStorage.getItem("authorization")


  useEffect(() => {
    fetch("http://localhost:3001/", {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(...data.orders)
        setMainData(data);
      });
  }, []);
  



  return (
     <BrowserRouter>
     <Routes>
      {/* After Authentication   */}
      {/* <Route path="/orders" element={<Protected><MainOrderContainer/></Protected>}></Route> */}
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/user/register" element={<SignUp/>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
