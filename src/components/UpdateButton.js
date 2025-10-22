import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../ui/Button';
import UpdateIcon from '../assets/svg/update-icon.svg?react';
export const UpdateButton = ({ onClick }) => {
    return (_jsx(Button, { className: "btn btn--icon", type: "button", "aria-label": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u043C", onClick: onClick, children: _jsx(UpdateIcon, { className: "btn__icon", width: 24, height: 24 }) }));
};
