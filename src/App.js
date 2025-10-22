import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/style.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from './components/Modal';
import { AuthForm } from './components/AuthForm';
import { selectAuthModalState, setIsAuthModalOpen } from './app/authModalSlice';
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader';
const MainPage = lazy(() => import('./pages/MainPage'));
const GenresPage = lazy(() => import('./pages/GenresPage'));
const GenrePage = lazy(() => import('./pages/GenrePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
function App() {
    const dispatch = useDispatch();
    const isAuthModalOpen = useSelector(selectAuthModalState);
    const closeModal = () => {
        dispatch(setIsAuthModalOpen(false));
    };
    return (_jsxs(BrowserRouter, { future: {
            v7_relativeSplatPath: true,
            v7_startTransition: true,
        }, children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainPage, {}) }), _jsx(Route, { path: "/movie/:movieID", element: _jsx(MoviePage, {}) }), _jsx(Route, { path: "/movie/genres", element: _jsx(GenresPage, {}) }), _jsx(Route, { path: "/movie", element: _jsx(GenrePage, {}) }), _jsx(Route, { path: "/account", element: _jsx(AccountPage, {}) })] }) }), isAuthModalOpen && (_jsx(Modal, { isOpen: isAuthModalOpen, onClose: closeModal, children: _jsx(AuthForm, {}) }))] }), _jsx(Footer, {})] }));
}
export default App;
