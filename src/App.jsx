import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watchs/Watch'

function App() {
  const [watch, setWatch] = useState([])
  useEffect(()=>{
    fetch('../src/components/Watchs/data.json')
    .then(res => res.json())
    .then(data => setWatch(data))
  }, [])
  
  return (
    <>
    <h1>this is react app {watch.length}</h1>
      <Watch/>
    </>
  )
}

export default App
