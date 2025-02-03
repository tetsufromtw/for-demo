import React, { useEffect, useRef } from "react";
import demoImage from "../../assets/images/demo.png";
import "./RoomBackground.css";

const RoomBackground = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.setAttribute("playsinline", "true");
            videoRef.current.setAttribute("webkit-playsinline", "true");
            videoRef.current.play().catch((error) => {
                console.error("自動播放失敗：", error);
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
                poster={demoImage}
            >
                NOT Supported
            </video>
        </div>
    );
};

export default RoomBackground;
