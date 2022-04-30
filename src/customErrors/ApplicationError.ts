
export class ApplicationError extends Error{
    errorType?: string | undefined;
    statusCode: Number;
    constructor(statusCode: Number, message: string, errorType?: string){
        super(message);
        this.statusCode = statusCode;
        this.errorType = errorType;
    }
}