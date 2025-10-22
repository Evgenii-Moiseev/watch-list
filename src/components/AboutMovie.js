import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getLanguageName } from '../utils/getLanguageName';
import { getAmount } from '../utils/getAmount';
export const AboutMovie = ({ movie }) => {
    const originLanguage = movie.language
        ? getLanguageName(movie.language)
        : 'Нет информации';
    const budget = movie.language && movie.budget
        ? getAmount(movie.language, movie.budget)
        : 'Нет информации';
    const revenue = movie.language && movie.revenue
        ? getAmount(movie.language, movie.revenue)
        : 'Нет информации';
    const director = movie.director ? movie.director : 'Нет информации';
    const production = movie.production ? movie.production : 'Нет информации';
    const awardsSummary = movie.awardsSummary
        ? movie.awardsSummary
        : 'Нет информации';
    return (_jsx("section", { className: "about-movie", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "about-movie__title", children: "\u041E \u0444\u0438\u043B\u044C\u043C\u0435" }), _jsxs("div", { className: "about-movie__wrap", children: [_jsxs("div", { className: "about-movie__feature", children: [_jsxs("p", { className: "about-movie__feature-caption", children: [_jsx("span", { className: "about-movie__caption", children: "\u042F\u0437\u044B\u043A \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0430" }), _jsx("span", { className: "about-movie__separator" })] }), _jsx("span", { className: "about-movie__descr", children: originLanguage })] }), _jsxs("div", { className: "about-movie__feature", children: [_jsxs("p", { className: "about-movie__feature-caption", children: [_jsx("span", { className: "about-movie__caption", children: "\u0411\u044E\u0434\u0436\u0435\u0442" }), _jsx("span", { className: "about-movie__separator" })] }), _jsx("span", { className: "about-movie__descr", children: budget })] }), _jsxs("div", { className: "about-movie__feature", children: [_jsxs("p", { className: "about-movie__feature-caption", children: [_jsx("span", { className: "about-movie__caption", children: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430" }), _jsx("span", { className: "about-movie__separator" })] }), _jsx("span", { className: "about-movie__descr", children: revenue })] }), _jsxs("div", { className: "about-movie__feature", children: [_jsxs("p", { className: "about-movie__feature-caption", children: [_jsx("span", { className: "about-movie__caption", children: "\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440" }), _jsx("span", { className: "about-movie__separator" })] }), _jsx("span", { className: "about-movie__descr", children: director })] }), _jsxs("div", { className: "about-movie__feature", children: [_jsxs("p", { className: "about-movie__feature-caption", children: [_jsx("span", { className: "about-movie__caption", children: "\u041F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D" }), _jsx("span", { className: "about-movie__separator" })] }), _jsx("span", { className: "about-movie__descr", children: production })] }), _jsxs("div", { className: "about-movie__feature", children: [_jsxs("p", { className: "about-movie__feature-caption", children: [_jsx("span", { className: "about-movie__caption", children: "\u041D\u0430\u0433\u0440\u0430\u0434\u044B" }), _jsx("span", { className: "about-movie__separator" })] }), _jsx("span", { className: "about-movie__descr", children: awardsSummary })] })] })] }) }));
};
