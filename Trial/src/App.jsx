import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from './components/Calendar'
import './App.css'
import Event from './components/Event'

const App = () =>{

  return(
  <div className = "App">
  <h1> Itinerary for 7 days in Chicago</h1>
  <h2>Welcome to Chicago, Natalia! Check out this calendar to get to know the city and see all sights during the day</h2>
  <Calendar />

  </div>
  )
}

export default App
