import React from 'react'
import { Counter } from './features/counter/Counter'
import { Portfolio } from './features/portfolio/Portfolio'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img
          src={`${process.env.PUBLIC_URL ?? ''}/logo.svg`}
          className="App-logo"
          alt="logo"
        /> */}
        
        {/* 11<Counter /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      {/* </header> */}
      <Portfolio />
    </div>
  )
}

export default App