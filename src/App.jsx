import React from "react";
import "./App.css";
import AgendaList from "./components/agenda/AgendaList";
import RoomBackground from "./components/common/RoomBackground";
import takatomoImage from "./assets/images/takatomo.jpg";

function App() {
    return (
        <div className="app">
            {/* 上方的顯示區塊（Header） */}
            <div className="header">
                <div className="header-left">
                    <h1>
                        standby. <span className="highlight">PLUS</span>
                    </h1>
                </div>
                <div className="header-right">
                    <div className="user-info">
                        <img
                            src={takatomoImage}
                            alt="User Avatar"
                            className="user-avatar"
                        />
                        <div className="user-details">
                            <span className="user-name">Takatomo</span>
                            <span className="user-level">Lv 100</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* 中間的主要內容區塊 */}
            <div className="content">
                {/* 左側的アジェンダ區域 */}
                <div className="agenda">
                    <h2 className="agenda-title">今週のアジェンダ</h2>
                    <div className="agenda-list">
                        <AgendaList />
                    </div>
                </div>

                {/* 右側的遊戲動畫區域 */}
                <div className="game">
                    <RoomBackground />
                </div>
            </div>
        </div>
    );
}

export default App;
