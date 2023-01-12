
const { getReasonPhrase } = require("http-status-codes");


const sendResponse = (response, type, code, message, data = null,authtoken= null) => {
    response.status(code).json({
        status: type,
        code: code,
        statusMessage: getReasonPhrase(code),
        message: message,
        result: data,
        authtoken:authtoken
    })
}

const validationError = (errors) => {
    const errorMessage = errors.details[0].message;
    console.log("Validation Error = >", errorMessage);
    return errorMessage
}


module.exports ={ validationError, sendResponse}