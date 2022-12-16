import React from 'react'
import Calender from './components/calender'
import NavBar from './components/NavBar'
import Meetings from './pages/Meetings'
import './styes.css'

function App() {
  return (
    <div className='welcome-screen'>
      <NavBar/>
      <Meetings/>
      <Calender/>
    </div>
  )
}

export default App
