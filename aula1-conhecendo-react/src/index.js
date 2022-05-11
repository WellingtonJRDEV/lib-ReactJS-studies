import React from 'react'
import ReactDom from 'react-dom'
import './styles.css'

const App = () => {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)
