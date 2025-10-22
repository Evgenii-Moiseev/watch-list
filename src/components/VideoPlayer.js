import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ReactPlayer from '../../node_modules/react-player';
import { PlayPauseButton } from './PlayPauseButton';
export const VideoPlayer = ({ title, url }) => {
    const [playing, setPlaying] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const handlePlayPause = () => {
        setPlaying(!playing);
        setIsHover(true);
    };
    const handleMouseEnter = () => {
        if (!playing) {
            setIsHover(true);
        }
    };
    const handleHoverLeave = () => {
        if (!playing) {
            setIsHover(false);
        }
    };
    return (_jsxs("div", { className: "trailer", onClick: handlePlayPause, onMouseEnter: handleMouseEnter, onMouseLeave: handleHoverLeave, children: [_jsx(ReactPlayer, { src: url, playing: playing, controls: false, style: { width: '100%', height: '100%' }, className: "trailer__player" }), !playing && _jsx(PlayPauseButton, { isHover: isHover }), !playing && _jsx("span", { className: "trailer__title", children: title })] }));
};
