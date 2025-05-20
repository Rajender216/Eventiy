import { useState } from 'react'
import './App.css'
import EventList from './pages/EvenList'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<EventList />} />
    </Routes>

    </>
  )
}

export default App
