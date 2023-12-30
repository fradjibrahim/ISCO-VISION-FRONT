import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from '@mui/material'
import Navbar from './components/navbar/Navbar'
import Home from "./pages/Home";
import ItemPage from "./components/item-page/ItemPage";
import CartPage from "./components/CartPage";
import {CartProvider} from "./context/cart";


function App() {
  return (

      <CartProvider>

          <BrowserRouter>
                <Navbar/>
              <Container>
                  <Routes>
                      <Route index element={<Home/> } path='/'/>
                      <Route index element={<ItemPage/>} path='/:items'/>
                      <Route index element={ <CartPage/> } path='/cart'/>
                      {/*<Route index element={ } path='/checkout'/>*/}
                      {/*<Route index element={<NoPage/>} path='&'/>*/}
                  </Routes>
              </Container>
          </BrowserRouter>

      </CartProvider>
  );
}

export default App;
