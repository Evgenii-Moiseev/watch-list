import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FormField = ({ children, errorMessage }) => {
    return (_jsxs("div", { className: "form-field", children: [children, errorMessage && (_jsx("span", { className: "form-field__error-text", children: errorMessage }))] }));
};
