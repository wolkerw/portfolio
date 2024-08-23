import React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Header } from './components/Header'
import { HomeParallax } from './pages/HomeParallax'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HomeParallax />
    </div>
  )
}

export default App
