import { useState } from 'react'
import dev from './assets/images/developer.jpg'
import './assets/styles/global.scss'
import Navbar from './components/nav-bar/navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
