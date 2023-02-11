import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

import Layout from './layouts/MainLayout'
import Home from './pages/Home'
import Test from './pages/test'

//redux
import { useSelector } from 'react-redux'
import { themeSelector } from './redux/theme/selectors'

//pages
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const AllAnime = lazy(() => import('./pages/AllAnime'));
const AnimeId = lazy(() => import('./pages/AnimeId'))

function App() {

  const theme = useSelector(themeSelector);

  return (
    <div data-theme={theme === 'light' ? 'light' : 'dark'} className="App">
      <Routes>
        <Route path='/Animenia/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='profile' element={<Suspense><Profile /></Suspense>} />
          <Route path='all' element={<Suspense><AllAnime /></Suspense>} />
          <Route path='test' element={<Test />} />
          <Route path='/Animenia/:id' element={<Suspense><AnimeId /></Suspense>} />
        </Route>
        <Route path='/Animenia/register' element={<Suspense><Register /></Suspense>} />
        <Route path='/Animenia/login' element={<Suspense><Login /></Suspense>} />
      </Routes>
    </div >
  )
}

export default App
