const { StatusCodes } = require('http-status-code');

class ValidationError extends Error {
    constructor(error) {
        super();
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        this.name = 'ValidationError';
        this.message = 'Not able to validation data sent in request';
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = ValidationError;