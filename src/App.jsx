import React from "react";
import "./App.css";
import AgendaList from "./components/agenda/AgendaList";

function App() {
    return (
        <div className="app">
            {/* 上方的顯示區塊（Header） */}
            <div className="header">
                <div className="header-left">
                    <h1>Standby PLUS</h1>
                </div>
                <div className="header-right">
                    <div className="user-info">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="user-avatar"
                        />
                        <span className="user-name">Sara</span>
                    </div>
                </div>
            </div>

            {/* 中間的主要內容區塊 */}
            <div className="content">
                {/* 左側的アジェンダ區域 */}
                <div className="agenda">
                    <h2>今週のアジェンダ</h2>
                    <div className="agenda-list">
                        <AgendaList />
                    </div>
                </div>

                {/* 右側的遊戲動畫區域 */}
                <div className="game">
                    <div className="game-placeholder">遊戲動畫區域</div>
                </div>
            </div>

            {/* 下方的預留區塊（Footer） */}
            <div className="footer">
                <span>© 2025 Standby PLUS. All rights reserved.</span>
            </div>
        </div>
    );
}

export default App;
