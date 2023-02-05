import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

import Layout from './layouts/MainLayout'
import Loading from './components/Loading'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Home = lazy(() => import('./pages/Home'))

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/Animenia/' element={<Layout />}>
          <Route path='' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path='/Animenia/profile/general' element={<Suspense fallback={<Loading />}></Suspense>} />
          <Route path='/Animenia/profile/security' element={<Suspense fallback={<Loading />}></Suspense>} />
          <Route path='/Animenia/profile/notifications' element={<Suspense fallback={<Loading />}></Suspense>} />
        </Route>
        <Route path='/Animenia/register' element={<Suspense fallback={<Loading />}><Register /></Suspense>} />
        <Route path='/Animenia/login' element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
      </Routes>
    </div>
  )
}

export default App
