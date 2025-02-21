import { useNavigate } from "react-router-dom";

function Main() {
    let move_page = useNavigate();

    return(
        <div id="main_page_container">
            <div id="main_page_box">
                <p className="main_page_title">aaaaa</p>
                <div id="main_page_btn1" className="main_page_btn" onClick={() => {move_page(`/MakePlaylist`)}}>xxxx</div>
                <div id="main_page_btn2" className="main_page_btn" onClick={() => {move_page(`/MakePlaylist`)}}>222222</div>
            </div>
        </div>
    )
}

export default Main;