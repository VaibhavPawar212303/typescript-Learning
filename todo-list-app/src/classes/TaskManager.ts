import inquirer from "inquirer";
import { Logger } from "../utils/logger";
import { Todo } from "./Todo";
import fs from 'fs';
let tasks: any[] = [];

export class TaskManager {
    private filePath = './db/db.json';

    saveTasks(todo: Todo) {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            tasks = JSON.parse(data);
        }
        // ✅ Append new task
        tasks.push(todo);
        fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2));
    }

    addTask(task: Todo): void {
        this.saveTasks(task);
        Logger.info("Task Added successfully.");
    }

    async updateTask() {
        if (!fs.existsSync(this.filePath)) {
            console.log("[INFO] No tasks found to edit.");
            return;
        }

        const data = fs.readFileSync(this.filePath, "utf-8");
        let tasks = JSON.parse(data);

        if (tasks.length === 0) {
            console.log("[INFO] No tasks available.");
            return;
        }

        // ✅ Get task titles for selection
        let taskTitles = tasks.map((task: any) => task.taskTitle);

        // ✅ Let user select the task to update
        let { selectedTask } = await inquirer.prompt([
            {
                type: "list",
                name: "selectedTask",
                message: "Which task would you like to edit?",
                choices: taskTitles,
            },
        ]);

        let taskIndex = tasks.findIndex((task: any) => task.taskTitle === selectedTask);

        if (taskIndex === -1) {
            console.log("[ERROR] Task not found.");
            return;
        }

        let taskToEdit = tasks[taskIndex];

        // ✅ Prompt user for updated values
        let updatedTask = await inquirer.prompt([
            { type: "input", name: "title", message: "Task Title:", default: taskToEdit.taskTitle },
            { type: "input", name: "desc", message: "Task Description:", default: taskToEdit.taskdec },
            { type: "list", name: "priority", message: "Priority:", choices: ["High", "Medium", "Low"], default: taskToEdit.taskPriority },
            { type: "input", name: "time", message: "Time required:", default: taskToEdit.taskTime },
            { type: "list", name: "status", message: "Status:", choices: ["In Progress", "Pending", "Skipped"], default: taskToEdit.taskStatus },
            { type: "input", name: "dueDate", message: "Due Date (YYYY-MM-DD):", default: taskToEdit.dueDate },
            { type: "input", name: "createdBy", message: "Created By:", default: taskToEdit.assignedTo },
        ]);

        // ✅ Update the task in the list
        tasks[taskIndex] = {
            ...taskToEdit,
            taskTitle: updatedTask.title,
            taskdec: updatedTask.desc,
            taskPriority: updatedTask.priority,
            taskTime: parseInt(updatedTask.time),
            taskStatus: updatedTask.status,
            dueDate: updatedTask.dueDate,
            assignedTo: updatedTask.createdBy,
            updatedAt: new Date(),
        };

        // ✅ Save updated tasks to file
        fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 4), "utf-8");
        console.log("[INFO] Task updated successfully!");
    }

    taskList(): void {
        Logger.info("All Tasks Lists");
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            tasks = JSON.parse(data);
            console.log(tasks);
        }
    }
}