export class PostNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.status = 404;
    }
}