import React, { lazy, Suspense } from 'react'
import './App.css'
import { Header } from './components/header'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ModalProvider from 'mui-modal-provider'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Toaster } from 'react-hot-toast'
import { Loader } from './components/loader'

export const muiCache = createCache({
  key: 'annotation-style-cache',
  prepend: true,
})

const Home = lazy(() => import('./containers/home'))
const Users = lazy(() => import('./containers/users'))
const DataPoints = lazy(() => import('./containers/dataPoints'))
const DataSet = lazy(() => import('./containers/dataSet'))
const Login = lazy(() => import('./containers/login'))

function App() {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Toaster toastOptions={{ style: { textAlign: 'center' } }} />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<Users />} />
              <Route path="/data-points" element={<DataPoints />} />
              <Route path="/dataset" element={<DataSet />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </ModalProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
