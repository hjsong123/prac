import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Item({index, data}){
    let move_page = useNavigate();

    useEffect(() => {
        const photo = document.getElementsByClassName('item_photo')[index]
        photo.style.backgroundImage = `url(${data.snippet.thumbnails.high.url})`
    })

    return(
        <div id="main_page_item" onClick={() => {move_page(`/music/${index}`)}}>
            <div id="item_frame">
                <div className="item_photo"></div>
            </div>
            <p className="item_letter" id="item_title">{data.snippet.title}</p>
            <p className="item_letter" id="item_heart"><FontAwesomeIcon icon={faHeart} style={{color: "#B197FC", fontSize: "1.2rem"}} id="item_heart"/>{data.snippet.countLike}</p>
        </div>
    )
}

export default Item;