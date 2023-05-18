import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Capsules from './components/Capsule'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Capsules />
    </div>
  )
}

export default App
