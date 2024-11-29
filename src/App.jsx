import { useState } from 'react'
import {Link , Route, Routes} from "react-router-dom"
import {Layout , Typography, Space} from "antd"
import Navbar from "./components/Navbar.jsx"
import Homepage from "./components/Homepage.jsx"
import Exchanges from "./components/Exchanges.jsx"
import Cryptocurrencies from "./components/Cryptocurrencies.jsx"
import CryptoDetails from "./components/CryptoDetails.jsx"
import News from "./components/News.jsx"
import './App.css'
import "antd/dist/reset.css" 

function App() {
  return (
    <div className = "app">
      <div className="navbar">
              <Navbar />        
      </div>
      <div className="main">
        <Layout style={{ display: "flex", flexDirection: "row" }}>
         
          <div className="routes">
            <Routes>
              <Route path='/' element = {<Homepage/>}></Route>
              <Route path='/exchanges' element = {<Exchanges />}></Route>
              <Route path='/cryptocurrencies' element = {<Cryptocurrencies />}></Route>
              <Route path='/crypto/:coinId' element = {<CryptoDetails />}></Route>
              <Route path='/news' element = {<News />}></Route>
              
            </Routes>
          </div>
        </Layout>

      <div className="footer">
                <Typography.Title  level = {5} style ={{
                  color : "white",
                  textAlign : "center"
                }}>
        CryptoHub<br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to ="/exchanges">Exchanges</Link>
        <Link to ="/news">News</Link>
      </Space>
        </div>
      </div>
    </div> 
  )
}

export default App
