import logo from './logo.svg'
import './App.css'
import Box from './components/Box'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          Edit <code>src/App.js</code> and save to reload.
        </h1>
        <Box>FOCUS</Box>
      </header>
    </div>
  )
}

export default App
