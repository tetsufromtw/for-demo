import React from "react";
import demoVideo from "../../assets/videos/demo.mp4";
import demoImage from "../../assets/images/demo.png";
import "./RoomBackground.css";

const RoomBackground = () => {
    return (
        <div className="room-background">
            <video
                className="room-video"
                src={demoVideo}
                autoPlay
                loop
                muted
                poster={demoImage}
            >
                你的瀏覽器不支援播放此影片。
            </video>
        </div>
    );
};

export default RoomBackground;
