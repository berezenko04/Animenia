import { Routes, Route } from 'react-router-dom'

import './App.scss'

import Layout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/Animenia/' element={<Layout />}>
          <Route path='' element={<Home />} />
        </Route>
        <Route path='/Animenia/register' element={<Register />} />
        <Route path='/Animenia/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
