import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./AgendaItem.css";

function AgendaItem({ id, task, description, progress, status, date, onToggleStatus, onProgressChange, onEdit }) {
    const [currentProgress, setCurrentProgress] = useState(progress);

    const handleSliderChange = (e) => {
        const newProgress = parseInt(e.target.value, 10);
        setCurrentProgress(newProgress);
        onProgressChange(newProgress);
    };

    const sliderBackground = {
        background: `linear-gradient(to right, #c36ea2, #f37366 ${currentProgress}%, #f0f0f0 ${currentProgress}%)`,
    };



    return (
        <div className="agenda-item" onClick={() => onEdit(id)}>
            <div className="agenda-header">
                <h2 className="agenda-task">{task}</h2>
                <div className="agenda-date">
                    <FaCalendarAlt className="agenda-date-icon" />
                    <span className="agenda-date-text">{date}</span>
                </div>
            </div>
            <p className="agenda-description">{description}</p>
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
                <span className={`agenda-status ${status === "done" ? "agenda-status--done" : "agenda-status--inprogress"}`}>
                    {status === "done" ? "Done!" : "もう少し！"}
                </span>
            </div>
        </div>
    );
}

export default AgendaItem;
