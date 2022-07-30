import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Protected from './components/protectedRoutes/protected'


import Products from './Components/productsPage/products';

import Orders from './Components/ordersPage/orders'
import Signin from './Components/signIn/Signin'
import SignUp from './Components/register/SignUp';



function App() {
  return (
     <BrowserRouter>
     <Routes>
      {/* After Authentication   */}
      {/* <Route path="/orders" element={<Protected><MainOrderContainer/></Protected>}></Route> */}
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/user/login" element={<Signin/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/user/register" element={<SignUp/>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
