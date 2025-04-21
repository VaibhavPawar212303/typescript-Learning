"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(id, taskTitle, taskdec, taskPriority, taskTime, taskStatus, dueDate, assignedTo, steps, tags, createdAt, updatedAt, isRecurring, attachments) {
        this.id = id;
        this.taskTitle = taskTitle;
        this.taskdec = taskdec;
        this.taskPriority = taskPriority;
        this.taskTime = taskTime;
        this.taskStatus = taskStatus;
        this.dueDate = dueDate;
        this.assignedTo = assignedTo;
        this.steps = steps;
        this.tags = tags;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isRecurring = isRecurring;
        this.attachments = attachments;
    }
}
exports.Todo = Todo;
