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

  
  let token =
  localStorage.getItem("authorization")

  if(token === null) {
    localStorage.setItem("authorization", "")
  } else{
    token = token
  }




  useEffect(() => {
    fetch("https://laundry--backend.herokuapp.com/user/details", {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMainData(data);
      });
  }, [token]);

  // console.log(mainData);
  



  return (
     <BrowserRouter>
     <Routes>
      {/* After Authentication   */}
      {/* <Route path="/orders" element={<Protected><MainOrderContainer/></Protected>}></Route> */}
      <Route path="/orders" element={<Orders mainData={mainData}/>}></Route>
      <Route path="/" element={<Signin  mainData={mainData}/>}></Route>
      <Route path="/products" element={<Products  mainData={mainData}/>}></Route>
      <Route path="/user/register" element={<SignUp  mainData={mainData}/>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
