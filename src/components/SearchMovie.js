import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetMoviesByTitleQuery } from '../app/movieApiSlice';
import { SearchField } from './SearchField';
import { SearchResult } from './SearchResult';
import { useDebounce } from 'use-debounce';
import { Overlay } from './Overlay';
export const SearchMovie = () => {
    const [searchParams, setSearchParams] = useSearchParams('');
    const [searchTerm, setSearchTerm] = useState(searchParams.get('title') || '');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    useEffect(() => {
        if (debouncedSearchTerm) {
            setSearchParams({ title: debouncedSearchTerm });
        }
        else {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('title');
            setSearchParams(newParams);
        }
    }, [debouncedSearchTerm, setSearchParams, searchParams]);
    const handleSearchMovies = (event) => {
        setSearchTerm(event.target.value);
    };
    const { data: movies, isError } = useGetMoviesByTitleQuery(debouncedSearchTerm, {
        skip: !debouncedSearchTerm,
    });
    const searchResult = movies?.slice(0, 5) || [];
    const handleCloseSearch = () => {
        setSearchTerm('');
        setIsSearchOpen(false);
    };
    useEffect(() => {
        const handleResize = () => {
            const mobileSize = window.innerWidth < 768;
            setIsMobile(mobileSize);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (searchTerm) {
            setIsSearchOpen(true);
        }
        else {
            setIsSearchOpen(false);
        }
    }, [searchTerm]);
    return (_jsxs("div", { className: "search", children: [_jsx(SearchField, { value: searchTerm, onChange: handleSearchMovies, onClear: handleCloseSearch, isMobile: isMobile, isSearchOpen: isSearchOpen, setIsSearchOpen: setIsSearchOpen }), isError ? (_jsx("div", { className: "search__result search__empty", children: _jsx("div", { className: "search__empty", children: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435." }) })) : (isSearchOpen &&
                movies &&
                searchTerm && (_jsx(SearchResult, { movies: searchResult, clearSearchTerm: handleCloseSearch, isMobile: isMobile, setIsSearchOpen: setIsSearchOpen }))), (isError || (movies && searchTerm)) && !isMobile && _jsx(Overlay, {})] }));
};
