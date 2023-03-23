class HttpException extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export { HttpException };

class NotFoundHttpException extends HttpException {
    constructor(message: string) {
        super(404, message);
    }
}

export { NotFoundHttpException };