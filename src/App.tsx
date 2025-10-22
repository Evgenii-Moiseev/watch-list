import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/style.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from './components/Modal'
import { AuthForm } from './components/AuthForm'
import { selectAuthModalState, setIsAuthModalOpen } from './app/authModalSlice'
import { lazy, Suspense } from 'react'
import { Loader } from './components/Loader'

const MainPage = lazy(() => import('./pages/MainPage'))
const GenresPage = lazy(() => import('./pages/GenresPage'))
const GenrePage = lazy(() => import('./pages/GenrePage'))
const MoviePage = lazy(() => import('./pages/MoviePage'))
const AccountPage = lazy(() => import('./pages/AccountPage'))

function App() {
  const dispatch = useDispatch()
  const isAuthModalOpen = useSelector(selectAuthModalState)
  const closeModal = () => {
    dispatch(setIsAuthModalOpen(false))
  }

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:movieID" element={<MoviePage />} />
            <Route path="/movie/genres" element={<GenresPage />} />
            <Route path="/movie" element={<GenrePage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </Suspense>
        {isAuthModalOpen && (
          <Modal isOpen={isAuthModalOpen} onClose={closeModal}>
            <AuthForm />
          </Modal>
        )}
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
