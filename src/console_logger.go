package logger

import (
    "fmt"
)

// ConsoleLogger represents a logger that
// logs messages to the console

type ConsoleLogger struct {}

func (cl *ConsoleLogger) Log(message string) {
    fmt.Println(message)
}
