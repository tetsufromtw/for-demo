import React from "react";
import VideoPlayer from "../common/VideoPlayer";
import demoVideo from "../../assets/videos/demo.mp4";
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
            >
                你的瀏覽器不支援播放此影片。
            </video>
        </div>
    );
};

export default RoomBackground;
