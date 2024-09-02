import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from "./Pages/Admin/Admin"
import AddProduct from './Components/AddProduct/AddProduct'

const App = () => {
  return (
    <>
    <Navbar/>
    <Admin/>
    <AddProduct/>
    </>
  )
}

export default App