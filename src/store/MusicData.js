//리액트 상태관리 라이브러리 zustand -> 확실히 편하고 쉽긴 함.
import { create } from "zustand";

export const useMusicData = create((set) => ({
    music : [
        {
            snippet : {
                thumbnails : {
                    high : {
                        url : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/rockstar-album-cover.jpg"
                    }
                },
                title : "rockstar",
                countLike : 132,
                audio : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
                color: "#c3af50",
            }
        },
        {
            snippet : {
                thumbnails : {
                    high : {
                        url : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/perception-album-cover.png"
                    }
                },
                title : "Let You Down",
                countLike : 224,
                audio : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3",
                color: "#25323b",
            }
        },
        {
            snippet : {
                thumbnails : {
                    high : {
                        url : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/fireproof-album-cover.jpeg"
                    }
                },
                title: "Fireproof",
                countLike : 274,
                audio : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/VAX%20-%20Fireproof%20Feat%20Teddy%20Sky.mp3",
                color: "#5d0126"
            }
		}
    ],
    setMusic: () => set((state) => ({music: state.music}))
}));