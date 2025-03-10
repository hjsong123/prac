import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMusicData } from "../store/MusicData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import paper from 'paper';

function PlayingMusic() {
    let move_page = useNavigate();
    const { music } = useMusicData();
    let { para } = useParams();
    const index = parseInt(para);
    let current_music = music[index];
    const [audioElement, setAudioElement] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리, 버튼 토글
    const [feq_speed, feq_set_speed] = useState(4);

    //음악 주파수 표현 기능
    useEffect(() => {
        let canvas = document.getElementById('bend');
        paper.install(window);
        paper.setup(canvas);

        let h = window.innerHeight,
            w = window.innerWidth,
            horizon = h / 2,
            pathCounts = 13,
            pathPoints = 15,
            strokeWidth = 2,
            strokeColor = '#FFFFFF',
            fillColor = 'rgba(108, 236, 229, .0)',
            speed = feq_speed,
            offset = 7,
            frequency = [0, -30, 50, -50, -35, 35, 0, -30, 50, -50, -35, 35, -30, 50, -50, -35, 35],
            delay = 0.9,
            mousePos = paper.view.center / 2,
            path = [];

        initializePath();

        function initializePath() {
        h = window.innerHeight;
        w = window.innerWidth;
        horizon = h / 2;
        
        //clear
        paper.project.activeLayer.removeChildren();
        
        for (let i = 0; i < pathCounts; i++) {
            path[i] = new paper.Path();

            path[i].add(new paper.Point(-10, h));
            path[i].add(new paper.Point(-10, horizon));

            for (var p = 0; p < pathPoints - 1; p++) {
            h = path[i].add(new paper.Point(w / (pathPoints - 1) * p + p, horizon + frequency[p]));
            }
            
            path[i].add(new paper.Point(w + 10, horizon));
            path[i].add(new paper.Point(w + 10, h));

            path[i].strokeWidth = strokeWidth;
            path[i].strokeColor = strokeColor;
            
            if (i == 0) {
            path[i].fillColor = 'rgba(255, 255, 255, 0)';
            }
            
            path[i].smooth();
        }  
        }
        // paper.view.draw();

        paper.view.onFrame = function(event) {
        for (let p = 0; p < pathCounts; p++) {
            for (let s = 0; s < pathPoints; s++) {
            // skip first two points because they are the base of the path
            var value = (s % 2) ? -1 : 1;
            var segment = path[p].segments[2 + s];
            segment.point.y = horizon + ((Math.sin((event.time + s * delay) * speed)) * (frequency[s] * value + (p * offset * value)));
            }
        }
        }

        window.onresize = function(event) {
        initializePath();
        }

    }, [feq_speed])

    //오디오 재생 및 배경화면 맞춰서 바꾸기
    useEffect(() => {
        const bg_color = document.getElementById('music_page_container');
        if (bg_color) {
            bg_color.style.background = `${current_music?.snippet.color}`;
            //`linear-gradient(90deg, ${current_music?.snippet.color},rgb(217, 217, 217))`;
            //bg_color.style.backgroundSize = '400% 400%';
            //bg_color.style.animation = `gradient 10s ease infinite`;
        }

        const audio = document.querySelector("audio");
        setAudioElement(audio);

        if (audio && current_music) {
            const sourceElement = audio.querySelector("source");
            if (sourceElement) {
                sourceElement.setAttribute("src", current_music?.snippet.audio);
                audio.load();
            }

            return () => {
                audio.pause();
                audio.currentTime = 0;
            };
        }
    }, [index, current_music]);

    const handlePlay = () => {
        const circle = document.getElementById('music_circle');

        if (audioElement) {
            if (audioElement.paused) {
                audioElement.play().then(() => {
                    setIsPlaying(true);
                    circle.style.animationPlayState = 'running';
                }).catch(error => {
                    console.log("재생 오류:", error);
                });
            } else {
                audioElement.pause();
                setIsPlaying(false);
                circle.style.animationPlayState = 'paused';
            }
        }
    };

    const handlebackward = () => {
        move_page(`/music/${index - 1}`); // 여기에 실제 경로를 작성하세요
    };

    const handleForward = () => {
        move_page(`/music/${index + 1}`); // 여기에 실제 경로를 작성하세요
    };

    if (!current_music) {
        return <div>음악을 찾을 수 없습니다.</div>;
    }

    return (
        <div id="music_page_container">
            <canvas id="bend" style={{ position: "absolute", zIndex: "0", width: '100%', height: '100%' }}></canvas>
            <img id="music_circle" src={`${process.env.PUBLIC_URL}/public_assets/pngwing.com.png`} alt="Music Circle" />
            <div id="main_page_item" className="music_item">
                <div id="item_frame">
                    <img className="item_photo" src={current_music.snippet.thumbnails.high.url} alt={current_music.snippet.title} />
                    <audio loop>
                        <source src='' type="audio/mpeg"></source>
                    </audio>
                </div>
                <p className="item_letter" id="item_title">{current_music.snippet.title}</p>
                <div id="item_btns">
                    <FontAwesomeIcon 
                        className="backword_btn" 
                        icon={faBackward} 
                        style={{ fontSize: "1.5rem", cursor: "pointer" }}
                        onClick={handlebackward}
                    />
                    <FontAwesomeIcon 
                        icon={isPlaying ? faPause : faPlay}
                        style={{ fontSize: "2.5rem", cursor: "pointer" }} 
                        onClick={handlePlay} 
                    />
                    <FontAwesomeIcon 
                        className="forword_btn" 
                        icon={faForward} 
                        style={{ fontSize: "1.5rem", cursor: "pointer" }}
                        onClick={handleForward} // 클릭 핸들러 추가
                    />
                </div>
            </div>
        </div>
    );
}

export default PlayingMusic;
