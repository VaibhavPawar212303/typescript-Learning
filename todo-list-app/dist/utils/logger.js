"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static info(message) {
        console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }
    static warn(message) {
        console.warn(`[WARNING] ${new Date().toISOString()} - ${message}`);
    }
    static error(message, error) {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error !== null && error !== void 0 ? error : '');
    }
}
exports.Logger = Logger;
