export class PBError {
    name: string;
    stack: string;
    message: string;
    constructor(message: string, name: string, stack: string) {
        this.message = message;
        this.name = name;
        this.stack = stack;
    }
}
