export function getErrorMessage(error) {
    let errorMessage = 'Unknown error';
    if (error &&
        typeof error === 'object' &&
        'data' in error &&
        error.data &&
        typeof error.data === 'object' &&
        'error' in error.data &&
        typeof error.data.error === 'string') {
        errorMessage = error.data.error;
    }
    else if (error &&
        typeof error === 'object' &&
        'data' in error &&
        error.data &&
        typeof error.data === 'string') {
        errorMessage = error.data;
    }
    else if (error &&
        typeof error === 'object' &&
        'message' in error &&
        typeof error.message === 'string') {
        errorMessage = error.message;
    }
    else if (error && typeof error === 'string') {
        errorMessage = error;
    }
    return errorMessage;
}
