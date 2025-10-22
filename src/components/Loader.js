import { jsx as _jsx } from "react/jsx-runtime";
export const Loader = ({ modifier }) => {
    return (_jsx("span", { className: `loader ${modifier ? modifier : ''}`, "data-testid": "loader" }));
};
