exports.success = data => {
    return {
        success: true,
        code: 202,
        data
    }
};

exports.fail = reason => {
    return {
        success: false,
        code: 400,
        reason
    }
};