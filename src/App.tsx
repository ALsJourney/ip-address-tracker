import { useState } from 'react'
import './App.css'
import IpForm from './components/IpForm'
import ResultDiv from "./components/ResultDiv";

function App() {

  return (
    <div className="App">
      <IpForm />
      <ResultDiv/>
    </div>
  )
}

export default App
