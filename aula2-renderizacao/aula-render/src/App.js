import Button from './Button'
import './App.css'

function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <br />
      <Button onClick={() => soma(30, 20)} name="Calcular" />
    </div>
  )
}

export default App
