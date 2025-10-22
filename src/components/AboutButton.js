import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export const AboutButton = ({ id }) => {
    return (_jsx(Link, { to: `/movie/${id}`, className: "btn btn--secondary", children: "\u041E \u0444\u0438\u043B\u044C\u043C\u0435" }));
};
