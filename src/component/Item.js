import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            <p className="item_letter" id="item_star">5.00 / 4.52 (hard coding)</p>
        </div>
    )
}

export default Item;