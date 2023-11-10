import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from '@mui/material'
import Navbar from './components/Navbar'
import Home from "./pages/Home";


function App() {
  return (
      <BrowserRouter>
            {/*<Navbar/>*/}
          <Container>
              <Routes>
                  <Route index element={<Home/> } path='/'/>
                  {/*<Route index element={<Home/>} path='/item'/>*/}
                  {/*<Route index element={ } path='/cart'/>*/}
                  {/*<Route index element={ } path='/checkout'/>*/}
                  {/*<Route index element={<NoPage/>} path='&'/>*/}
              </Routes>
          </Container>
      </BrowserRouter>
  );
}

export default App;
