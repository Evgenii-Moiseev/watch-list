import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { MovieBtns } from './MovieBtns';
import { MovieFeatures } from './MovieFeatures';
import { VideoPlayer } from './VideoPlayer';
import { useAddToFavoritesMutation, useDeleteFromFavoritesMutation, } from '../app/favoritesApiSlice';
import { getIsFavorite } from '../utils/getIsFavovite';
import { setIsAuthModalOpen } from '../app/authModalSlice';
import { useGetProfileQuery } from '../app/authApiSlice';
import { useDispatch } from 'react-redux';
import { Modal } from './Modal';
export const MovieCard = ({ movie, onUpdate, page }) => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [addToFavorites, { isLoading: isAddLoading, isSuccess: isAddSuccess }] = useAddToFavoritesMutation();
    const [deleteFromFavorites, { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },] = useDeleteFromFavoritesMutation();
    const { data: user, refetch } = useGetProfileQuery();
    const dispatch = useDispatch();
    let isFavorite = false;
    if (user) {
        isFavorite = getIsFavorite(String(movie.id), user.favorites);
    }
    const isFavoritesActionLoading = isAddLoading || isDeleteLoading;
    useEffect(() => {
        if (isAddSuccess) {
            refetch();
        }
    }, [isAddSuccess, refetch]);
    useEffect(() => {
        if (isDeleteSuccess) {
            refetch();
        }
    }, [isDeleteSuccess, refetch]);
    const handleFavoritesClick = () => {
        if (!user) {
            dispatch(setIsAuthModalOpen(true));
        }
        else {
            if (isFavorite) {
                deleteFromFavorites(movie.id);
            }
            else {
                addToFavorites(String(movie.id));
            }
        }
    };
    const openModal = () => {
        setIsVideoModalOpen(true);
    };
    const closeModal = () => {
        setIsVideoModalOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "movie-intro", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "movie-intro__wrap", children: [_jsxs("div", { className: "movie-intro__inner", children: [_jsxs("div", { className: "movie-intro__info", children: [_jsx(MovieFeatures, { movie: movie }), page === 'main' ? (_jsx("h2", { className: "movie-intro__title", children: movie.title })) : (_jsx("h1", { className: "movie-intro__title", children: movie.title })), movie.plot && (_jsx("p", { className: "movie-intro__descr", children: movie.plot }))] }), _jsx(MovieBtns, { page: page, onUpdate: onUpdate, movieID: movie.id, onModalOpen: openModal, onFavoritesClick: handleFavoritesClick, isFavorite: isFavorite, isFavoritesLoading: isFavoritesActionLoading })] }), _jsx("div", { className: "movie-intro__poster", children: movie.backdropUrl ? (_jsx("img", { className: "movie-intro__image", src: movie.backdropUrl, alt: movie.title, width: 680, height: 552 })) : (_jsx("img", { className: "movie-intro__image", src: "/random-movie-stub.jpg", alt: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u0430\u0442\u0443\u0448\u043A\u0438 \u0441 \u043A\u0438\u043D\u043E\u043F\u043B\u0435\u043D\u043A\u043E\u0439", width: 680, height: 552 })) })] }) }) }), isVideoModalOpen && (_jsx(Modal, { isOpen: isVideoModalOpen, onClose: closeModal, modifier: "video", children: movie.trailerUrl ? (_jsx(VideoPlayer, { url: movie.trailerUrl, title: movie.title })) : (_jsx("div", { className: "trailer-error", children: "\u0422\u0440\u0435\u0439\u043B\u0435\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" })) }))] }));
};
