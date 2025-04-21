"use strict";
// src/config/constants.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = exports.TASK_STATUSES = exports.PRIORITIES = void 0;
exports.PRIORITIES = {
    HIGH: "High",
    MEDIUM: "Medium",
    LOW: "Low",
};
exports.TASK_STATUSES = {
    PENDING: "Pending",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
};
exports.CONFIG = {
    DEFAULT_PRIORITY: exports.PRIORITIES.MEDIUM,
    DEFAULT_STATUS: exports.TASK_STATUSES.PENDING,
};
