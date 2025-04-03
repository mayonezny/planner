import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppInitial } from './HOC/App/AppInitial'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppInitial />
      </BrowserRouter>
    </>
  )
}

export default App
