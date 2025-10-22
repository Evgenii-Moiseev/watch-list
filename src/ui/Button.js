import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ isLoading, isDisabled = isLoading, children, className, type, ...props }) => {
    return (_jsx("button", { disabled: isDisabled, type: type, className: className, ...props, children: children }));
};
