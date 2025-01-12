import React, { useState } from "react";
import "./AgendaItem.css";

function AgendaItem({ task, description, progress, status, onToggleStatus, onProgressChange }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentProgress, setCurrentProgress] = useState(progress);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSliderChange = (e) => {
        const newProgress = parseInt(e.target.value, 10);
        setCurrentProgress(newProgress);
        onProgressChange(newProgress);
    };
    const sliderBackground = {
        background: `linear-gradient(to right, #ff7e5f ${currentProgress}%, #f0f0f0 ${currentProgress}%)`,
    };

    return (
        <div className="agenda-item">
            {/* 標題 */}
            <h2 className="agenda-task">{task}</h2>

            {/* 任務細節 */}
            <p className="agenda-description">
                {isExpanded || description.length <= 30
                    ? description
                    : `${description.slice(0, 30)}...`}
                {description.length > 30 && (
                    <span className="expand-toggle" onClick={handleToggleExpand}>
                        {isExpanded ? " 收起" : " 展開"}
                    </span>
                )}
            </p>

            {/* 進度條和按鈕 */}
            <div className="agenda-controls">
                <input
                    type="range"
                    className="agenda-slider"
                    value={currentProgress}
                    onChange={handleSliderChange}
                    min="0"
                    max="100"
                    style={sliderBackground}
                />
                <span className="agenda-progress">{currentProgress}%</span>
                <button
                    className={`agenda-button ${status === "in-progress" ? "agenda-button--inactive" : ""}`}
                    onClick={onToggleStatus}
                >
                    {status === "done" ? "Done!" : "もう少し！"}
                </button>

            </div>
        </div>
    );
}

export default AgendaItem;
