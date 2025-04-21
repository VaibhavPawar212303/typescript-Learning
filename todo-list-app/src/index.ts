import inquirer from "inquirer";
import { TaskManager } from "./classes/TaskManager";
import { Todo } from "./classes/Todo";
import { v4 as uuidv4 } from 'uuid';
import { PRIORITIES, TASK_STATUSES } from "./config/constants";
const taskManager = new TaskManager();

async function main() {
    let options = await inquirer.prompt([
        { type: 'list', name: 'choice', message: 'please select : ', choices: ['Create New Todo', 'Check previous tasks', 'Update your task'] },
    ])
    if (options.choice === "Create New Todo") {
        let steps: string[] = [];
        let addMoreSteps = true;
        while (addMoreSteps) {
            let stepAnswer = await inquirer.prompt([
                { type: "input", name: "step", message: "Enter a step (or leave empty to finish):" },
            ]);
            if (stepAnswer.step.trim() !== "") {
                steps.push(stepAnswer.step);
            } else {
                addMoreSteps = false;
            }
        }
        let answer = await inquirer.prompt([
            { type: "input", name: "title", message: "Task Title:" },
            { type: "input", name: "desc", message: "Task Description:" },
            { type: "list", name: "priority", message: "Priority:", choices: ["High", "Medium", "Low"] },
            { type: "input", name: "time", message: "Time required:" },
            { type: "list", name: "status", message: "Status:", choices: ["In Progress", "Pending", "Skip"] },
            { type: "input", name: "dueDate", message: "Due Date:" },
            { type: "input", name: "createdBy", message: "Created By:" },
        ]);
        let todo = new Todo(
            uuidv4(),
            answer.title,
            answer.desc,
            answer.priority,
            answer.time,
            answer.status,
            answer.dueDate,
            answer.createdBy,
            steps,
            ["Programming", "typescript"],
            new Date(),
            new Date(),
            false,
            ["https://example.com/doc.pdf"]
        );
        taskManager.addTask(todo);
        taskManager.taskList();
    }  else if (options.choice == 'Check previous tasks') {
        taskManager.taskList();
    } else if (options.choice == 'Update your task') {
        taskManager.updateTask();
    }
}

main();




