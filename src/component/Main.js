import { useNavigate } from "react-router-dom";
import Item from "./Item";
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from "react";
import { useMusicData } from "../store/MusicData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Main() {
    let move_page = useNavigate();

   const { music, setMusic } = useMusicData();

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
                        <button className="search_btn" type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input className="search_text" type="text" name="" placeholder="검색어 입력"></input>
                    </form>
                </div>
                <div id="main_page_bottom_box">
                {
                    music.map((item, index) => (
                        <Item key={index} data={item} index={index}/> // 각 데이터에 대해 Item 컴포넌트 생성
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Main;