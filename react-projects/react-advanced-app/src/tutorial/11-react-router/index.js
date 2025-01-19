import React from 'react'
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// pages
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Person from './Person'
// navbar
import Navbar from './Navbar'

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route path='/' element={<Home />} />
        {/* About route */}
        <Route path='/about' element={<About />} />
        {/* People route */}
        <Route path='/people' element={<People />} />
        {/* Dynamic route for Person */}
        <Route path='/person/:id' element={<Person />} />
        {/* Catch-all route for undefined paths */}
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default ReactRouterSetup
