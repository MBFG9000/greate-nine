import { useState } from 'react'
import './App.css'

function App() {
  return (
  <>
  <div>
    <p>Hello</p>
  </div>
  <Text display_text={"hey"}/>
  <Text display_text={"whats up"}/>
  <Text display_text={"hello"}/>
  </>)
}

function Text({display_text}) {
  return (<div>
            <p>{display_text}</p>
          </div>)
}

export default App
