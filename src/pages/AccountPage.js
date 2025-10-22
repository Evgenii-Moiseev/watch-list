import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import FavoritesIcon from '../assets/svg/favorites-icon.svg?react';
import UserIcon from '../assets/svg/user-icon.svg?react';
import { useGetProfileQuery, useLogoutMutation } from '../app/authApiSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Loader } from '../components/Loader';
import { favoritesApiSlice, useGetFavoritesQuery, } from '../app/favoritesApiSlice';
import { useDeleteFromFavoritesMutation } from '../app/favoritesApiSlice';
import { useDispatch } from 'react-redux';
import { FavoriteMovies } from '../components/FavoriteMovies';
import { AccountSettings } from '../components/AccountSettings';
const AccountPage = () => {
    const [accountState, setAccountState] = useState('favorites');
    const { data: user, isLoading: isUserDataLoading, isError: isUserDataError, refetch: refetchUser, } = useGetProfileQuery();
    const { data: movies, isLoading: isFavoritesLoading, isError: isFavoritesError, refetch: refetchFavorites, } = useGetFavoritesQuery();
    const [deleteFromFavorites, { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },] = useDeleteFromFavoritesMutation();
    const [logout, { isLoading }] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if ((!user && !isUserDataLoading) || isUserDataError) {
            navigate('/');
        }
    }, [user, isUserDataLoading, isUserDataError, navigate]);
    const handleLogout = async () => {
        await logout();
        dispatch(favoritesApiSlice.util.resetApiState());
        navigate('/');
    };
    const handleSwitch = () => {
        setAccountState((prevState) => prevState === 'favorites' ? 'settings' : 'favorites');
    };
    useEffect(() => {
        if (isDeleteSuccess) {
            refetchFavorites();
            refetchUser();
        }
    }, [isDeleteSuccess, refetchFavorites, refetchUser]);
    const handleDelete = (id) => {
        deleteFromFavorites(id);
    };
    if (isUserDataLoading || isFavoritesLoading) {
        return _jsx(Loader, {});
    }
    if (user) {
        return (_jsx("section", { className: "account", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "account__wrap", children: [_jsx("h1", { className: "account__title", children: "\u041C\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442" }), _jsxs("div", { className: "account__tabs", children: [_jsxs(Button, { className: `btn btn--XL-font ${accountState === 'favorites' ? 'btn--active' : ''} `, type: "button", onClick: handleSwitch, children: [_jsx(FavoritesIcon, { className: "account__icon", width: 24, height: 24 }), _jsx("span", { className: "account__tab-text", children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0444\u0438\u043B\u044C\u043C\u044B" }), _jsx("span", { className: "account__tab-text-mobile", children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" })] }), _jsxs(Button, { className: `btn btn--XL-font ${accountState === 'settings' ? 'btn--active' : ''} `, type: "button", onClick: handleSwitch, children: [_jsx(UserIcon, { className: "account__icon", width: 24, height: 24 }), _jsx("span", { className: "account__tab-text", children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430" }), _jsx("span", { className: "account__tab-text-mobile", children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" })] })] }), accountState === 'favorites' && (_jsxs(_Fragment, { children: [movies && (_jsx(FavoriteMovies, { movies: movies, isDeleteLoading: isDeleteLoading, handleDelete: handleDelete })), isFavoritesError && (_jsx("span", { className: "account__favorites-empty", children: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435..." }))] })), accountState === 'settings' && (_jsx(AccountSettings, { user: user, isLoading: isLoading, onLogout: handleLogout }))] }) }) }));
    }
};
export default AccountPage;
