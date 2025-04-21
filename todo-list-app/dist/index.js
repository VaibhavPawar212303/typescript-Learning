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
const inquirer_1 = __importDefault(require("inquirer"));
const TaskManager_1 = require("./classes/TaskManager");
const Todo_1 = require("./classes/Todo");
const uuid_1 = require("uuid");
const taskManager = new TaskManager_1.TaskManager();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let options = yield inquirer_1.default.prompt([
            { type: 'list', name: 'choice', message: 'please select : ', choices: ['Create New Todo', 'Check previous tasks', 'Update your task'] },
        ]);
        if (options.choice === "Create New Todo") {
            let steps = [];
            let addMoreSteps = true;
            while (addMoreSteps) {
                let stepAnswer = yield inquirer_1.default.prompt([
                    { type: "input", name: "step", message: "Enter a step (or leave empty to finish):" },
                ]);
                if (stepAnswer.step.trim() !== "") {
                    steps.push(stepAnswer.step);
                }
                else {
                    addMoreSteps = false;
                }
            }
            let answer = yield inquirer_1.default.prompt([
                { type: "input", name: "title", message: "Task Title:" },
                { type: "input", name: "desc", message: "Task Description:" },
                { type: "list", name: "priority", message: "Priority:", choices: ["High", "Medium", "Low"] },
                { type: "input", name: "time", message: "Time required:" },
                { type: "list", name: "status", message: "Status:", choices: ["In Progress", "Pending", "Skip"] },
                { type: "input", name: "dueDate", message: "Due Date:" },
                { type: "input", name: "createdBy", message: "Created By:" },
            ]);
            let todo = new Todo_1.Todo((0, uuid_1.v4)(), answer.title, answer.desc, answer.priority, answer.time, answer.status, answer.dueDate, answer.createdBy, steps, ["Programming", "typescript"], new Date(), new Date(), false, ["https://example.com/doc.pdf"]);
            taskManager.addTask(todo);
            taskManager.taskList();
        }
        else if (options.choice == 'Check previous tasks') {
            taskManager.taskList();
        }
        else if (options.choice == 'Update your task') {
            taskManager.updateTask();
        }
    });
}
main();
