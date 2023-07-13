class Logger {
    logInfo(message) {
        console.log(`[INFO] ${message}`);
    }

    logError(message) {
        console.error(`[ERROR] ${message}`);
    }

    logWarning(message) {
        console.warn(`[WARNING] ${message}`);
    }

    logDebug(message) {
        console.debug(`[DEBUG] ${message}`);
    }
}

module.exports = Logger;
