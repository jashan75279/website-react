import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
const App = (props) => {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route  path='/About' element={<About/>}/>
    <Route  path='/Contact' element={<Contact/>}/>
    <Route  path='/Service' element={<Service/>}/>
    </Routes>

    {/* <Footer /> */}
    
  </>
  )
}

export default App
