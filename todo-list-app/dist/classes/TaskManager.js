"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const logger_1 = require("../utils/logger");
const fs_1 = __importDefault(require("fs"));
let tasks = [];
class TaskManager {
    constructor() {
        this.filePath = './db/db.json';
    }
    saveTasks(todo) {
        if (fs_1.default.existsSync(this.filePath)) {
            const data = fs_1.default.readFileSync(this.filePath, 'utf-8');
            tasks = JSON.parse(data);
        }
        // ✅ Append new task
        tasks.push(todo);
        fs_1.default.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2));
    }
    addTask(task) {
        this.saveTasks(task);
        logger_1.Logger.info("Task Added successfully.");
    }
    updateTask() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fs_1.default.existsSync(this.filePath)) {
                console.log("[INFO] No tasks found to edit.");
                return;
            }
            const data = fs_1.default.readFileSync(this.filePath, "utf-8");
            let tasks = JSON.parse(data);
            if (tasks.length === 0) {
                console.log("[INFO] No tasks available.");
                return;
            }
            // ✅ Get task titles for selection
            let taskTitles = tasks.map((task) => task.taskTitle);
            // ✅ Let user select the task to update
            let { selectedTask } = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "selectedTask",
                    message: "Which task would you like to edit?",
                    choices: taskTitles,
                },
            ]);
            let taskIndex = tasks.findIndex((task) => task.taskTitle === selectedTask);
            if (taskIndex === -1) {
                console.log("[ERROR] Task not found.");
                return;
            }
            let taskToEdit = tasks[taskIndex];
            // ✅ Prompt user for updated values
            let updatedTask = yield inquirer_1.default.prompt([
                { type: "input", name: "title", message: "Task Title:", default: taskToEdit.taskTitle },
                { type: "input", name: "desc", message: "Task Description:", default: taskToEdit.taskdec },
                { type: "list", name: "priority", message: "Priority:", choices: ["High", "Medium", "Low"], default: taskToEdit.taskPriority },
                { type: "input", name: "time", message: "Time required:", default: taskToEdit.taskTime },
                { type: "list", name: "status", message: "Status:", choices: ["In Progress", "Pending", "Skipped"], default: taskToEdit.taskStatus },
                { type: "input", name: "dueDate", message: "Due Date (YYYY-MM-DD):", default: taskToEdit.dueDate },
                { type: "input", name: "createdBy", message: "Created By:", default: taskToEdit.assignedTo },
            ]);
            // ✅ Update the task in the list
            tasks[taskIndex] = Object.assign(Object.assign({}, taskToEdit), { taskTitle: updatedTask.title, taskdec: updatedTask.desc, taskPriority: updatedTask.priority, taskTime: parseInt(updatedTask.time), taskStatus: updatedTask.status, dueDate: updatedTask.dueDate, assignedTo: updatedTask.createdBy, updatedAt: new Date() });
            // ✅ Save updated tasks to file
            fs_1.default.writeFileSync(this.filePath, JSON.stringify(tasks, null, 4), "utf-8");
            console.log("[INFO] Task updated successfully!");
        });
    }
    taskList() {
        logger_1.Logger.info("All Tasks Lists");
        if (fs_1.default.existsSync(this.filePath)) {
            const data = fs_1.default.readFileSync(this.filePath, 'utf-8');
            tasks = JSON.parse(data);
            console.log(tasks);
        }
    }
}
exports.TaskManager = TaskManager;
