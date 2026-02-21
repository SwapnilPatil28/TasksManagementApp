import React, { useState, useEffect } from "react";

function Home() {

    const [ID, setID] = useState(()=>{
        try {
            const savedid = localStorage.getItem("IDnumber");
            return savedid? JSON.parse(savedid) : 1;
        } catch {
            return 1;
        }
    });

    const [isLightMode, setIsLightMode] = useState(()=>{
        try {
            const savedMode = localStorage.getItem("LightDarkMode");
            return savedMode ? JSON.parse(savedMode) : false;
        } catch {
            return false;
        }
    });

    const [tasks, setTasks] = useState(()=>{
        try {
            const savedTasks = localStorage.getItem("tasks");
            return savedTasks ? JSON.parse(savedTasks) : [];
        } catch {
            return [];
        }
    });
    
    const [showAddTaskTab, setShowAddTaskTab] = useState(false);

    useEffect(()=>{
        localStorage.setItem("LightDarkMode", JSON.stringify(isLightMode));
    }, [isLightMode])

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    useEffect(()=>{
        localStorage.setItem("IDnumber", JSON.stringify(ID));
    }, [ID])

    const toggleDone = (id) =>
    {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    }

    const deleteTask = (id) =>
    {
        setTasks(tasks.filter(t => t.id !== id));
    }



    function toggleAddTaskTab(){
        setShowAddTaskTab(!showAddTaskTab);
    }

    function addTask(){
        const taskNameInput = document.querySelector("#AddTaskTab input[type='text']");
        const prioritySelect = document.getElementById("Priority");
        const taskName = taskNameInput.value.trim();
        taskNameInput.value = "";
        const priority = prioritySelect.value;

        const sortValue = priority === "High" ? 1 : (priority === "Medium" ? 2 : 3);

        if (taskName) {
            const newTask = {id: ID, name: taskName, priority: priority, done: false, sortValue: sortValue};
            setID(ID+1);
            setTasks([...tasks, newTask]);
        }

        // Hide the Add Task Tab after adding the task
        setShowAddTaskTab(false);
    }

  return (
    <div
        id="AppHolder"
        className={`h-screen p-7 flex flex-col gap-[18px] overflow-hidden ${
            isLightMode ? "bg-[#f5f5f7] text-[#1d1d1f]" : "bg-[#0b0b0c] text-[#f5f5f7]"
        }`}
    >
        <div
            id="TopNavBar"
            className={`min-h-[60px] rounded-[18px] border relative overflow-hidden flex items-center justify-between gap-3 px-[18px] py-[10px] backdrop-blur-[12px] ${
                isLightMode
                    ? "bg-gradient-to-b from-[rgba(255,255,255,0.75)] to-[rgba(255,255,255,0.6)] border-[rgba(0,0,0,0.08)] [box-shadow:0_10px_30px_rgba(0,0,0,0.08)]"
                    : "bg-gradient-to-b from-[rgba(20,20,22,0.9)] to-[rgba(20,20,22,0.75)] border-[rgba(255,255,255,0.08)] [box-shadow:0_12px_36px_rgba(255,255,255,0.08)]"
            }`}
        >
            <div
                aria-hidden="true"
                className={`absolute left-3 right-3 h-px bottom-[6px] ${
                    isLightMode
                        ? "bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.08)] to-transparent"
                        : "bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent"
                }`}
            />
            <h1 className="m-0 text-[20px] font-bold tracking-[0.4px]">📃Daily Planner</h1>
            <button
                className={`px-4 py-2 rounded-xl border text-[30px] font-semibold leading-[1.2] whitespace-normal text-center transition-transform duration-150 ease-in hover:-translate-y-px ${
                    isLightMode
                        ? "bg-white border-[rgba(0,0,0,0.08)] text-[#1d1d1f] hover:[box-shadow:0_10px_22px_rgba(0,0,0,0.2)]"
                        : "bg-[#141416] border-[rgba(255,255,255,0.08)] text-[#f5f5f7] hover:[box-shadow:0_10px_22px_rgba(255,255,255,0.18)]"
                }`}
                onClick={() => setIsLightMode(!isLightMode)}
            >
                {isLightMode ? "🌜" : "🌞"}
            </button>
        </div>
        <div id="ContentBox" className="flex-1 grid grid-cols-1 min-[901px]:grid-cols-[minmax(220px,0.75fr)_1.5fr] gap-[22px] min-h-0 max-h-full">
            {/* Side by Side */}
            <div
                id="DailyTasks"
                className={`rounded-[18px] border p-5 flex flex-col gap-[14px] min-h-0 ${
                    isLightMode
                        ? "bg-[#fbfbfc] border-[rgba(0,0,0,0.08)] [box-shadow:0_10px_30px_rgba(0,0,0,0.08)]"
                        : "bg-[#1b1b1e] border-[rgba(255,255,255,0.08)] [box-shadow:0_12px_36px_rgba(255,255,255,0.08)]"
                }`}
            >
                <div className="flex items-center justify-between gap-3">
                    <h2 className="m-0 text-[18px] tracking-[0.2px]">Daily Tasks</h2>
                    <button
                        className={`self-start mt-1 px-4 py-[10px] rounded-xl border font-semibold tracking-[0.2px] leading-[1.2] whitespace-normal text-center text-white transition-transform duration-150 ease-in hover:-translate-y-px w-full min-[901px]:w-auto ${
                            isLightMode
                                ? "bg-[#0071e3] border-[rgba(0,0,0,0.08)] hover:[box-shadow:0_10px_22px_rgba(0,0,0,0.2)]"
                                : "bg-[#2997ff] border-[rgba(255,255,255,0.08)] hover:[box-shadow:0_10px_22px_rgba(255,255,255,0.18)]"
                        }`}
                        onClick={toggleAddTaskTab}
                    >
                        Add A Task
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 min-h-0">
                    {[...tasks]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                        .sort((a, b) => a.sortValue - b.sortValue)
                        .map(task => (
                            <div
                                key={task.id}
                                className={`flex items-center gap-[10px] p-[12px_14px] rounded-[14px] border ${
                                    isLightMode
                                        ? "bg-white border-[rgba(0,0,0,0.08)]"
                                        : "bg-[#141416] border-[rgba(255,255,255,0.08)]"
                                }`}
                            >
                                <div className="flex-1 min-w-0 font-semibold break-words">{task.name}</div>
                                <div
                                    className={`px-[10px] py-1 rounded-full text-xs border whitespace-nowrap ${
                                        task.priority === "Low"
                                            ? "bg-[rgba(52,199,89,0.12)] border-[rgba(52,199,89,0.4)] text-[#34c759]"
                                            : task.priority === "Medium"
                                            ? "bg-[rgba(255,159,10,0.12)] border-[rgba(255,159,10,0.4)] text-[#ff9f0a]"
                                            : "bg-[rgba(255,69,58,0.12)] border-[rgba(255,69,58,0.4)] text-[#ff453a]"
                                    }`}
                                >
                                    {task.priority}
                                </div>

                                <button
                                    className={`self-start mt-1 px-4 py-[10px] rounded-xl border font-semibold tracking-[0.2px] leading-[1.2] whitespace-normal text-center text-white transition-transform duration-150 ease-in hover:-translate-y-px w-full min-[901px]:w-auto ${
                                        isLightMode
                                            ? "bg-[#0071e3] border-[rgba(0,0,0,0.08)] hover:[box-shadow:0_10px_22px_rgba(0,0,0,0.2)]"
                                            : "bg-[#2997ff] border-[rgba(255,255,255,0.08)] hover:[box-shadow:0_10px_22px_rgba(255,255,255,0.18)]"
                                    }`}
                                    onClick={() => toggleDone(task.id)}
                                >
                                    {task.done ? "✅" : "Mark Done?"}
                                </button>
                                <button
                                    className={`self-start mt-1 px-4 py-[10px] rounded-xl border font-semibold tracking-[0.2px] leading-[1.2] whitespace-normal text-center text-white transition-transform duration-150 ease-in hover:-translate-y-px w-full min-[901px]:w-auto ${
                                        isLightMode
                                            ? "bg-[#0071e3] border-[rgba(0,0,0,0.08)] hover:[box-shadow:0_10px_22px_rgba(0,0,0,0.2)]"
                                            : "bg-[#2997ff] border-[rgba(255,255,255,0.08)] hover:[box-shadow:0_10px_22px_rgba(255,255,255,0.18)]"
                                    }`}
                                    onClick={() => deleteTask(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div
                id="Workspace"
                className={`rounded-[18px] border p-5 flex flex-col gap-[14px] min-h-0 ${
                    isLightMode
                        ? "bg-white border-[rgba(0,0,0,0.08)] [box-shadow:0_10px_30px_rgba(0,0,0,0.08)]"
                        : "bg-[#141416] border-[rgba(255,255,255,0.08)] [box-shadow:0_12px_36px_rgba(255,255,255,0.08)]"
                }`}
            >

                {/* Add Task Tab */}
                <div
                    id="AddTaskTab"
                    style={{display: showAddTaskTab ? "flex" : "none"}}
                    className={`flex-col gap-[14px] p-[14px] rounded-[14px] border ${
                        isLightMode
                            ? "bg-[#fbfbfc] border-[rgba(0,0,0,0.08)]"
                            : "bg-[#1b1b1e] border-[rgba(255,255,255,0.08)]"
                    }`}
                >
                    <label className={`text-xs tracking-[0.3px] uppercase ${isLightMode ? "text-[#6e6e73]" : "text-[#a1a1a6]"}`}>
                        Task Name:
                    </label>
                    <input
                        type="text"
                        className={`w-full px-[14px] py-3 rounded-xl border outline-none transition-[border,box-shadow] duration-200 ease-in appearance-none ${
                            isLightMode
                                ? "bg-white text-[#1d1d1f] border-[rgba(0,0,0,0.08)] focus:border-[#0071e3] focus:[box-shadow:0_0_0_3px_rgba(0,113,227,0.2)]"
                                : "bg-[#101012] text-[#f5f5f7] border-[rgba(255,255,255,0.08)] focus:border-[#2997ff] focus:[box-shadow:0_0_0_3px_rgba(41,151,255,0.2)]"
                        }`}
                    ></input>
                    <label className={`text-xs tracking-[0.3px] uppercase ${isLightMode ? "text-[#6e6e73]" : "text-[#a1a1a6]"}`}>
                        Priority
                    </label>
                    <select
                        id="Priority"
                        className={`w-full px-[14px] py-3 pr-[34px] rounded-xl border outline-none transition-[border,box-shadow] duration-200 ease-in appearance-none bg-[length:6px_6px,6px_6px] bg-no-repeat bg-[position:calc(100%-18px)_50%,calc(100%-12px)_50%] [background-image:linear-gradient(45deg,transparent_50%,var(--caret)_50%),linear-gradient(135deg,var(--caret)_50%,transparent_50%)] ${
                            isLightMode
                                ? "bg-white text-[#1d1d1f] border-[rgba(0,0,0,0.08)] focus:border-[#0071e3] focus:[box-shadow:0_0_0_3px_rgba(0,113,227,0.2)] [--caret:#6e6e73]"
                                : "bg-[#101012] text-[#f5f5f7] border-[rgba(255,255,255,0.08)] focus:border-[#2997ff] focus:[box-shadow:0_0_0_3px_rgba(41,151,255,0.2)] [--caret:#a1a1a6]"
                        }`}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <button
                        className={`self-start mt-1 px-4 py-[10px] rounded-xl border font-semibold tracking-[0.2px] leading-[1.2] whitespace-normal text-center text-white transition-transform duration-150 ease-in hover:-translate-y-px w-full min-[901px]:w-auto ${
                            isLightMode
                                ? "bg-[#0071e3] border-[rgba(0,0,0,0.08)] hover:[box-shadow:0_10px_22px_rgba(0,0,0,0.2)]"
                                : "bg-[#2997ff] border-[rgba(255,255,255,0.08)] hover:[box-shadow:0_10px_22px_rgba(255,255,255,0.18)]"
                        }`}
                        onClick={addTask}
                    >
                        Save Task
                    </button>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Home;
