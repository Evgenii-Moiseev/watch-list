import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import PlayerPauseIcon from '../assets/svg/player-pause.svg?react';
import PlayerPlayIcon from '../assets/svg/player-play.svg?react';
export const PlayPauseButton = ({ isHover }) => {
    return (_jsx(_Fragment, { children: isHover ? (_jsx(PlayerPlayIcon, { className: "trailer__icon", width: 80, height: 80 })) : (_jsx(PlayerPauseIcon, { className: "trailer__icon", width: 80, height: 80 })) }));
};
