import { Routes, Route } from 'react-router-dom'

import './App.scss'

import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path='/Animenia/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
