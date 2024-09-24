package routes

import (
	"github.com/gorilla/mux"
	"cybergen/src/pkg/handlers"
)

func RegisterRoutes(r *mux.Router) {
	r.HandleFunc("/users", handlers.CreateUser).Methods("POST").Name("createUser")

	r.HandleFunc("/users", handlers.GetUsers).Methods("GET").Name("getUsers")

	r.HandleFunc("/user/{id}", handlers.GetUser).Methods("GET").Name("getUser")
}