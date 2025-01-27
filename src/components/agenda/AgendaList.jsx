import React, { useState } from "react";
import AgendaItem from "./AgendaItem";
import "./AgendaList.css";

function AgendaList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "定例会議準備",
            description: "会議資料を整理して、業務内容を確認する必要があります。",
            status: "done",
            progress: 100,
            date: "2025-01-01",
        },
        {
            id: 2,
            task: "報告書作成",
            description: "クライアントに提出するレポートを作成する。",
            status: "in-progress",
            progress: 30,
            date: "2025-01-21",
        },
        {
            id: 3,
            task: "ワークショップ準備",
            description: "資料作成、参加者調整、日程確認を行います。",
            status: "in-progress",
            progress: 10,
            date: "2025-02-28",
        },
        {
            id: 4,
            task: "社内技術勉強会",
            description: "スライド作成と発表準備を完了する必要があります。",
            status: "in-progress",
            progress: 70,
            date: "2025-03-15",
        },
        {
            id: 5,
            task: "社内技術勉強会",
            description: "スライド作成と発表準備を完了する必要があります。",
            status: "in-progress",
            progress: 70,
            date: "2025-03-19",
        },
    ]);

    const [isEditing, setIsEditing] = useState(false); // 控制彈窗是否顯示
    const [currentTask, setCurrentTask] = useState(null); // 保存正在編輯的任務

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

    const handleEdit = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        setCurrentTask(taskToEdit);
        setIsEditing(true);
    };

    const handleSave = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === currentTask.id ? { ...currentTask } : task
            )
        );
        setIsEditing(false);
    };

    return (
        <div className="agenda-list">
            {tasks.map((task) => (
                <AgendaItem
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    description={task.description}
                    progress={task.progress}
                    status={task.status}
                    date={task.date}
                    onToggleStatus={() => toggleTaskStatus(task.id)}
                    onProgressChange={(progress) => updateTaskProgress(task.id, progress)}
                    onEdit={handleEdit}
                />
            ))}

            {/* 編輯彈窗 */}
            {isEditing && (
                <div className="model">
                    <div className="model-content">
                        <h2>編集アジェンダ</h2>
                        <label>タイトル:</label>
                        <input
                            type="text"
                            value={currentTask.task}
                            onChange={(e) =>
                                setCurrentTask({ ...currentTask, task: e.target.value })
                            }
                        />
                        <label>内容:</label>
                        <textarea
                            value={currentTask.description}
                            onChange={(e) =>
                                setCurrentTask({ ...currentTask, description: e.target.value })
                            }
                        />
                        <label>進捗 (%):</label>
                        <input
                            type="number"
                            value={currentTask.progress}
                            min="0"
                            max="100"
                            onChange={(e) =>
                                setCurrentTask({
                                    ...currentTask,
                                    progress: parseInt(e.target.value, 10),
                                })
                            }
                        />
                        <label>日付:</label>
                        <input
                            type="date"
                            value={currentTask.date}
                            onChange={(e) =>
                                setCurrentTask({ ...currentTask, date: e.target.value })
                            }
                        />
                        <div className="model-actions">
                            <button onClick={handleSave}>保存</button>
                            <button onClick={() => setIsEditing(false)}>キャンセル</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AgendaList;
