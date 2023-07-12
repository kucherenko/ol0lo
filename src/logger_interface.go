package logger

// Logger defines the interface for logging
// Implementations of this interface will provide
// different log output options

type Logger interface {
    Log(message string)
}
