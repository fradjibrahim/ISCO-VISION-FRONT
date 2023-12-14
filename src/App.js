import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from '@mui/material'
import Navbar from './components/navbar/Navbar'
import Home from "./pages/Home";
import ItemPage from "./components/item-page/ItemPage";


function App() {
  return (
      <BrowserRouter>
            <Navbar/>
          <Container>
              <Routes>
                  <Route index element={<Home/> } path='/'/>
                  <Route index element={<ItemPage/>} path='/:items'/>
                  {/*<Route index element={ } path='/cart'/>*/}
                  {/*<Route index element={ } path='/checkout'/>*/}
                  {/*<Route index element={<NoPage/>} path='&'/>*/}
              </Routes>
          </Container>
      </BrowserRouter>
  );
}

export default App;
