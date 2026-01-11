import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './MyRoutes/Home'
import About from './MyRoutes/About'

const App = () => {
  return (
    <div>
      <h2>This is My App.jsx File</h2>
      <BrowserRouter>
        <Routes>
           <Route path='/home' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
