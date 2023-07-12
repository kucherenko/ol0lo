package logger

import (
    "os"
    "log"
)

// FileLogger represents a logger that
// logs messages to a file

type FileLogger struct {
    logFile *os.File
}

func NewFileLogger(filePath string) (*FileLogger, error) {
    file, err := os.OpenFile(filePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil {
        return nil, err
    }

    return &FileLogger{logFile: file}, nil
}

func (fl *FileLogger) Log(message string) {
    log.SetOutput(fl.logFile)
    log.Println(message)
}
