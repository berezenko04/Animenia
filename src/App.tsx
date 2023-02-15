import { useSelector } from 'react-redux'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

//styles
import './App.scss'

//redux
import { themeSelector } from './redux/theme/selectors'

//components
import EmptyScreen from './components/EmptyScreen'

//pages
import Layout from './layouts/MainLayout'
import Home from './pages/Home'
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
          <Route path='profile' element={<Suspense fallback={<EmptyScreen />}><Profile /></Suspense>} />
          <Route path='all' element={<Suspense fallback={<EmptyScreen />}><AllAnime /></Suspense>} />
          <Route path='/Animenia/:id' element={<Suspense fallback={<EmptyScreen />}><AnimeId /></Suspense>} />
        </Route>
        <Route path='/Animenia/register' element={<Suspense fallback={<EmptyScreen />}><Register /></Suspense>} />
        <Route path='/Animenia/login' element={<Suspense fallback={<EmptyScreen />}><Login /></Suspense>} />
      </Routes>
    </div >
  )
}

export default App
