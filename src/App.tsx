import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

import Layout from './layouts/MainLayout'
import Home from './pages/Home'
import Loading from './components/Loading'

//redux
import { useSelector } from 'react-redux'
import { themeSelector } from './redux/theme/selectors'

//pages
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const AllAnime = lazy(() => import('./pages/AllAnime'));

function App() {

  const theme = useSelector(themeSelector);

  return (
    <div data-theme={theme === 'light' ? 'light' : 'dark'} className="App">
      <Routes>
        <Route path='/Animenia/' element={<Layout />}>
          <Route path='' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path='/Animenia/profile' element={<Suspense fallback={<Loading />}><Profile /></Suspense>} />
          <Route path='/Animenia/all' element={<Suspense fallback={<Loading />}><AllAnime /></Suspense>} />
        </Route>
        <Route path='/Animenia/register' element={<Suspense fallback={<Loading />}><Register /></Suspense>} />
        <Route path='/Animenia/login' element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
      </Routes>
    </div>
  )
}

export default App
