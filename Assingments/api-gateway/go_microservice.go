// go_microservice.go
package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello from Go microservice!")
}

func main() {
    http.HandleFunc("/", helloHandler)
    fmt.Println("Go microservice running on port 5002")
    http.ListenAndServe(":5002", nil)
}
