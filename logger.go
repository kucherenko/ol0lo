package main

import (
	"fmt"
)

type Logger interface {
	LogLevel() string
	LogFormat() string
	Transport() string
	
	SetLogLevel(level string)
	SetLogFormat(format string)
	SetTransport(transport string)
	
	Log(message string)
}

type SmartLogger struct {
	logLevel   string
	logFormat  string
	transport  string
}

func (logger *SmartLogger) LogLevel() string {
	return logger.logLevel
}

func (logger *SmartLogger) LogFormat() string {
	return logger.logFormat
}

func (logger *SmartLogger) Transport() string {
	return logger.transport
}

func (logger *SmartLogger) SetLogLevel(level string) {
	logger.logLevel = level
}

func (logger *SmartLogger) SetLogFormat(format string) {
	logger.logFormat = format
}

func (logger *SmartLogger) SetTransport(transport string) {
	logger.transport = transport
}

func (logger *SmartLogger) Log(message string) {
	logMessage := fmt.Sprintf(logger.logFormat, logger.logLevel, message)

	// Perform the transport mechanism based on the provided transport type
	switch logger.transport {
	case "local":
		// Logic to log locally
	case "remote":
		// Logic to log remotely
	default:
		// Invalid transport type
	}
}

func main() {
	// Example usage
	logger := &SmartLogger{
		logLevel:   "info",
		logFormat:  "[%s] %s",
		transport:  "local",
	}
	
	logger.Log("This is a log message")
}