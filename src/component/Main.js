import { useNavigate } from "react-router-dom";
import Item from "./Item";
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Main() {
    let move_page = useNavigate();

    const API_KEY = "AIzaSyDcf4ddS0ZMVo1Zv9nqY8Mw5lvwTY-oJ3E"; // 발급받은 API 키 입력 
    // 유튜브 영상 URL
    const [videos, setVideos] = useState([]); // 유튜브 영상 정보

    useEffect(() => {
        async function fetchVideoData() {
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&videoCategoryId=10&maxResults=5&key=${API_KEY}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (data.items) {
                    setVideos(data.items);
                    console.log(data.items)
                } else {
                    console.error("데이터를 불러올 수 없습니다.");
                }
            } catch (error) {
                console.error("데이터 가져오기 실패:", error);
            }
        }

        fetchVideoData();

    }, [])

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
                {videos.map((item, index) => (
                    <Item key={index} data={item} index={index}/> // 각 데이터에 대해 Item 컴포넌트 생성
                ))}
                </div>
            </div>
        </div>
    )
}

export default Main;