import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const {value}=useSelector((state)=>state.counter);
  return (
    <div>
      
    </div>
  )
}

export default App
