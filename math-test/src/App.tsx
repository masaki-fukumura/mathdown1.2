import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Iframe from "react-iframe";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <Iframe url={"../pdfviewer/index.html"} 
      width="100%" height="650px" />
    </>
  )
}

export default App
