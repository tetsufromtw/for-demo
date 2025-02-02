import React, { useEffect, useRef } from "react";
import demoImage from "../../assets/images/demo.png";
import "./RoomBackground.css";

const RoomBackground = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("自動播放失敗，需用戶手動播放", error);
            });
        }
    }, []);

    return (
        <div className="room-background">
            <video
                className="room-video"
                ref={videoRef}
                src="https://fordemo-gp.s3.us-east-1.amazonaws.com/demo.mp4"
                autoPlay
                loop
                muted
                playsinline
                poster={demoImage}
            >
                你的瀏覽器不支援播放此影片。
            </video>
        </div>
    );
};

export default RoomBackground;
