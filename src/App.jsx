import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="weather-info">
        <div className="temperature"> 
          <h1>24°</h1>
          <p>FEELS LIKE</p>
        </div>
        <div className="icon">
          <span role="img" aria-label="sun">☀️</span>
        </div>
      </div>
    </div>

    

    
  )
}

export default App