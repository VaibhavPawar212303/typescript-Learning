export class Todo implements iTodo {
    constructor(
        public id: string,
        public taskTitle: string,
        public taskdec: string,
        public taskPriority: string,
        public taskTime: number,
        public taskStatus: string,
        public dueDate: string,
        public assignedTo: string,
        public steps: string[],
        public tags: string[],
        public createdAt: Date,
        public updatedAt: Date,
        public isRecurring: boolean,
        public attachments: string[],
    ) {

    }
}