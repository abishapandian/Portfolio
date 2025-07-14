import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
   <>
   <section>
    <Router>
      <Routes>
        <Route path='home' element={<Home/>}></Route>
      </Routes>
    </Router>
   </section>
   </>
  )
}
