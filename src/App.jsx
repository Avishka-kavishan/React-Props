import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderContent/>
    <BodyContent>
      <p>Hii</p>
    </BodyContent>
    <BodyContent>
      <p>Hello</p>
    </BodyContent>
    </>
  )
}

export default App
