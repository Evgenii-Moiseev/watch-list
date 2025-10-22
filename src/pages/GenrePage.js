import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSearchParams } from 'react-router-dom';
import { useGetMoviesByGenreQuery } from '../app/movieApiSlice';
import { getGenreData } from '../utils/getGenreData';
import { Link } from 'react-router-dom';
import { MoviePosterCard } from '../components/MoviePosterCard';
import BackIcon from '../assets/svg/arrow-icon.svg?react';
import { useEffect, useRef, useState } from 'react';
import { Loader } from '../components/Loader';
import { DataError } from '../components/DataError';
import { Button } from '../ui/Button';
const GenrePage = () => {
    const [searchParams] = useSearchParams();
    const genre = searchParams.get('genre') || '';
    const genreData = getGenreData(genre);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(0);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
    const [isPageEnds, setIsPageEnds] = useState(false);
    const [isNextPage, setIsNextPage] = useState(true);
    const { data, isLoading, isError } = useGetMoviesByGenreQuery({ genre, page });
    const checkIfMoviesFit = () => {
        const windowHeight = window.innerHeight;
        const header = document.querySelector('.header') || null;
        const footer = document.querySelector('.footer') || null;
        const genre = document.querySelector('.genre') || null;
        if (!header || !footer || !genre) {
            return;
        }
        const contentHeight = header.offsetHeight + footer.offsetHeight + genre.offsetHeight;
        if (contentHeight <= windowHeight) {
            setShowLoadMoreButton(true);
        }
        else {
            setShowLoadMoreButton(false);
        }
    };
    useEffect(() => {
        checkIfMoviesFit();
    }, [movies]);
    useEffect(() => {
        const handleResize = () => {
            checkIfMoviesFit();
        };
        window.addEventListener('resize', handleResize);
        checkIfMoviesFit();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleShowMore = () => {
        if (isNextPage && !isLoading) {
            setPage((prev) => prev + 1);
        }
    };
    const canLoadMoreRef = useRef(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 150) {
                if (!isPageEnds && isNextPage && !isLoading && canLoadMoreRef.current) {
                    canLoadMoreRef.current = false;
                    setPage((prev) => prev + 1);
                }
            }
            else {
                setIsPageEnds(false);
                canLoadMoreRef.current = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            setMovies([]);
            setIsNextPage(true);
            canLoadMoreRef.current = true;
        };
    }, [isPageEnds, isNextPage, isLoading]);
    useEffect(() => {
        if (data) {
            setMovies((prevMovies) => [...prevMovies, ...data]);
        }
        if (data && data.length < 10) {
            setIsNextPage(false);
        }
    }, [data]);
    useEffect(() => {
        if (isPageEnds && isNextPage) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [isPageEnds, isNextPage]);
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (isError) {
        return _jsx(DataError, {});
    }
    return (_jsx("section", { className: "genre", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "genre__top", children: [_jsx(Link, { to: '../movie/genres', className: "genre__back-link", children: _jsx(BackIcon, { className: "genre__icon", width: 40, height: 40 }) }), _jsx("h1", { className: "genre__title", children: genreData.nameRU })] }), _jsxs("div", { className: "genre__wrap", children: [_jsx("ul", { className: "genre__list", children: movies &&
                                movies.map((movie) => {
                                    return (_jsx("li", { className: "genre__item", children: _jsx(Link, { className: "genre__link", to: `../movie/${movie.id}`, children: _jsx(MoviePosterCard, { movie: movie }) }) }, movie.id));
                                }) }), showLoadMoreButton && (_jsx(Button, { className: "btn btn--primary", type: "button", onClick: handleShowMore, isLoading: isLoading, children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435" }))] })] }) }));
};
export default GenrePage;
