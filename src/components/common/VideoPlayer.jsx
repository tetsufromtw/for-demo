import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ src, className }) => {
    return (
        <div className={`video-container ${className}`}>
            <video className="video-player" autoPlay loop muted>
                <source src={src} type="video/mp4" />
                你的瀏覽器不支援此影片格式。
            </video>
        </div>
    );
};

export default VideoPlayer;
