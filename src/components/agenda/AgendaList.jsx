import React, { useState } from "react";
import AgendaItem from "./AgendaItem";
import "./AgendaList.css";

function AgendaList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "定例会議準備",
            description: "会議資料を整理して、業務内容を確認する必要があります。",
            status: "in-progress",
            progress: 50,
        },
        {
            id: 2,
            task: "報告書作成",
            description: "クライアントに提出するレポートを作成する。",
            status: "in-progress",
            progress: 30,
        },
        {
            id: 3,
            task: "ワークショップ準備",
            description: "資料作成、参加者調整、日程確認を行います。",
            status: "in-progress",
            progress: 10,
        },
        {
            id: 4,
            task: "社内技術勉強会",
            description: "スライド作成と発表準備を完了する必要があります。",
            status: "in-progress",
            progress: 70,
        },
    ]);

    const toggleTaskStatus = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, status: task.status === "done" ? "in-progress" : "done" }
                    : task
            )
        );
    };

    const updateTaskProgress = (id, progress) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, progress } : task))
        );
    };

    return (
        <div className="agenda-list">
            {tasks.map((task) => (
                <AgendaItem
                    key={task.id}
                    task={task.task}
                    description={task.description}
                    progress={task.progress}
                    status={task.status}
                    onToggleStatus={() => toggleTaskStatus(task.id)}
                    onProgressChange={(progress) => updateTaskProgress(task.id, progress)}
                />
            ))}
        </div>
    );
}

export default AgendaList;
