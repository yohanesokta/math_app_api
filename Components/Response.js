function sendResponse(
    data = null,
    count = null,
    message = "",
    type = "success",
    code = 200
) {
    return {
        status: {
            code: code,
            type: type,
        },
        response: {
            message: message,
            count: count,
            data: data,
        },
    };
}

module.exports = { sendResponse };
