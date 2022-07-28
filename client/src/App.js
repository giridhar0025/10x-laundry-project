import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Protected from './components/protectedRoutes/protected'
import Orders from './components/ordersPage/orders'
import Signin from './components/signIn/Signin'

function App() {
  return (
     <BrowserRouter>
     <Routes>
      {/* After Authentication   */}
      {/* <Route path="/orders" element={<Protected><MainOrderContainer/></Protected>}></Route> */}
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/user/login" element={<Signin/>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
