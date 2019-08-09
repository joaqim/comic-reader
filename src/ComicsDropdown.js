import React, { useRef } from "react";
import useDropdown from "./use-dropdown";

export default function ComicsDropdown(props) {
    const comicsEl = useRef(null);
    const comicsDropEl = useRef(null);
    const [comicsDropOpen, toggleComicsDrop] = useDropdown(comicsDropEl, comicsEl);
    const onClick = () => toggleComicsDrop();

    return (
            <>
            <div ref={comicsEl} onClick={onClick}>
            <span>Comics</span>
            <span>{comicsDropOpen ? '▲' : '▼'}</span>
            </div>
            <div ref={comicsDropEl} hidden={comicsDropOpen}>
            <div>One Piece</div>
            <div>Naruto</div>
            <div>Hunter x Hunter</div>
            </div>
            </>
    );
}
