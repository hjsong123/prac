import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Main() {
    let move_page = useNavigate();

    return(
        <div id="main_page_container">
            <div id="main_page_info">
                <p className="main_page_word">P-LIST</p>
                <ul className="main_page_word">
                    <li onClick={() => {move_page('/')}}>SIGN UP</li>
                    <li onClick={() => {move_page('/')}}>MAKE PLAY LIST</li>
                    <li onClick={() => {move_page('/')}}>MY PLAY LIST</li>
                    <li onClick={() => {move_page('/')}}>CATEGORY</li>
                </ul>
            </div>
            <div id="main_page_music">
                <div id="main_page_top_box">
                    <form className="search_box" action="" method="get">
                        <input className="search_text" type="text" name="" placeholder="검색어 입력"></input>
                        <button className="search_btn" type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;